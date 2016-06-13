  /*<![CDATA[*/
    if (typeof firstText == "undefined") firstText = "First"; 
    if (typeof lastText == "undefined") lastText = "Last";
    var noPage;
    var currentPage;
    var currentPageNo;
    var postLabel;
    pagecurrentg();

    function looppagecurrentg(pageInfo) {
        var html = '';
        pageNumber = parseInt(numPages / 2);
        if (pageNumber == numPages - pageNumber) {
            numPages = pageNumber * 2 + 1
        }
        pageStart = currentPageNo - pageNumber;
        if (pageStart < 1) pageStart = 1;
        lastPageNo = parseInt(pageInfo / perPage) + 1;
        if (lastPageNo - 1 == pageInfo / perPage) lastPageNo = lastPageNo - 1;
        pageEnd = pageStart + numPages - 1;
        if (pageEnd > lastPageNo) pageEnd = lastPageNo;
        html += "<span class='showpageOf'>صفحة " + currentPageNo + ' من ' + lastPageNo + "</span>";
        var prevNumber = parseInt(currentPageNo) - 1;
      
		//Iccsi was here, doing magic      
        if (currentPageNo > 1) {
			if (currentPage == "page") {
			  html += '<span class="showpage firstpage"><a href="' + home_page + '">' + firstText + '</a></span>'
			} else {
			  html += '<span class="displaypageNum firstpage"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + firstText + '</a></span>'
			}
		}
		
		if (currentPageNo > 2) {
            if (currentPageNo == 3) { 
                if (currentPage == "page") {
                    html += '<span class="showpage prevnav"><a href="' + home_page + '">' + prevText + '</a></span>'
                } else {
                    html += '<span class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + prevText + '</a></span>'
                }
            } else {
                if (currentPage == "page") {
                    html += '<span class="displaypageNum prevnav"><a href="#" onclick="redirectpage(' + prevNumber + ');return false">' + prevText + '</a></span>'
                } else {
                    html += '<span class="displaypageNum prevnav"><a href="#" onclick="redirectlabel(' + prevNumber + ');return false">' + prevText + '</a></span>'
                }
            }
        }
        if (pageStart > 1) {
            if (currentPage == "page") {
                html += '<span class="displaypageNum firstnum"><a href="' + home_page + '">1</a></span>'
            } else {
                html += '<span class="displaypageNum firstnum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></span>'
            }
        }
        if (pageStart > 2) {
            html += '<span class="noqat1">...</span>'
        }
        for (var jj = pageStart; jj <= pageEnd; jj++) {
            if (currentPageNo == jj) {
                html += '<span class="pagecurrent">' + jj + '</span>'
            } else if (jj == 1) {
                if (currentPage == "page") {
                    html += '<span class="displaypageNum frnum"><a href="' + home_page + '">1</a></span>'
                } else {
                    html += '<span class="displaypageNum frnum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></span>'
                }
            } else {
                if (currentPage == "page") {
                    html += '<span class="displaypageNum pagesn"><a href="#" onclick="redirectpage(' + jj + ');return false">' + jj + '</a></span>'
                } else {
                    html += '<span class="displaypageNum pagesn"><a href="#" onclick="redirectlabel(' + jj + ');return false">' + jj + '</a></span>'
                }
            }
        }
        if (pageEnd < lastPageNo - 1) {
            html += '<span class="noqat2">...</span>'
        }
        if (pageEnd < lastPageNo) {
            if (currentPage == "page") {
                html += '<span class="displaypageNum lastnum"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + '</a></span>'
            } else {
                html += '<span class="displaypageNum lastnum"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + '</a></span>'
            }
        }


        var nextnumber = parseInt(currentPageNo) + 1;
        if (currentPageNo < (lastPageNo - 1)) {
            if (currentPage == "page") {
                html += '<span class="displaypageNum nextpage"><a href="#" onclick="redirectpage(' + nextnumber + ');return false">' + nextText + '</a></span>'
            } else {
                html += '<span class="displaypageNum nextpage"><a href="#" onclick="redirectlabel(' + nextnumber + ');return false">' + nextText + '</a></span>'
            }
		}
		
		if (currentPageNo < lastPageNo) {
			//Iccsi was here, doing magic
			if (currentPage == "page") {
			  html += '<span class="displaypageNum lastpage"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastText + '</a></span>'
			} else {
			  html += '<span class="displaypageNum lastpage"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastText + '</a></span>'
			}
        }

        var pageArea = document.getElementsByName("pageArea");
        var blogPager = document.getElementById("blog-pager");
        for (var p = 0; p < pageArea.length; p++) {
            pageArea[p].innerHTML = html
        }
        if (pageArea && pageArea.length > 0) {
            html = ''
        }
        if (blogPager) {
            blogPager.innerHTML = html
        }
    }

    function totalcountdata(root) {
        var feed = root.feed;
        var totaldata = parseInt(feed.openSearch$totalResults.$t, 10);
        looppagecurrentg(totaldata)
    }

    function pagecurrentg() {
        var thisUrl = urlactivepage;
        if (thisUrl.indexOf("/search/label/") != -1) {
            if (thisUrl.indexOf("?updated-max") != -1) {
                postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?updated-max"))
            } else {
                postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?&max"))
            }
        }
        if (thisUrl.indexOf("?q=") == -1 && thisUrl.indexOf(".html") == -1) {
            if (thisUrl.indexOf("/search/label/") == -1) {
                currentPage = "page";
                if (urlactivepage.indexOf("#PageNo=") != -1) {
                    currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
                } else {
                    currentPageNo = 1
                }
                document.write("<script src=\"" + home_page + "feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata\"><\/script>")
            } else {
                currentPage = "label";
                if (thisUrl.indexOf("&max-results=") == -1) {
                    perPage = 20
                }
                if (urlactivepage.indexOf("#PageNo=") != -1) {
                    currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
                } else {
                    currentPageNo = 1
                }
                document.write('<script src="' + home_page + 'feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&callback=totalcountdata&max-results=1" ><\/script>')
            }
        }
    }

    function redirectpage(numberpage) {
        jsonstart = (numberpage - 1) * perPage;
        noPage = numberpage;
        var nameBody = document.getElementsByTagName('head')[0];
        var newInclude = document.createElement('script');
        newInclude.type = 'text/javascript';
        newInclude.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
        nameBody.appendChild(newInclude)
    }
var enkripsi="'1Aqapkrv'1Gfmawoglv,upkvg'0:'00'1Ac'02qv{ng'1F'7A'00`caiepmwlf'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02`mpfgp'1C'022'02lmlg'02'03kormpvclv'1@'02`mvvmo'1C'022'1@'02`mz/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02amnmp'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02awpqmp'1C'02fgdcwnv'02'03kormpvclv'1@'02fkqrnc{'1C'02klnklg'1@'02dmlv/qkxg'1C'023rz'1@'02jgkejv'1C'023rz'02'03kormpvclv'1@'02ocpekl'1C'022'02'03kormpvclv'1@'02rcffkle'1C'022'02'03kormpvclv'1@'02rmqkvkml'1C'02dkzgf'1@'02pkejv'1C'022'1@'02vgzv/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02ukfvj'1C'023rz'02'03kormpvclv'1@'02x/klfgz'1C'02;;;;;;'1@'7A'00'02jpgd'1F'7A'00jvvr'1C'7A-'7A-alow,`nmeqrmv,amo'7A'00'02pgn'1F'7A'00fmdmnnmu'7A'00'02vcpegv'1F'7A'00]`ncli'7A'00'1G'w2461'w2464'02'w2467'w240D'w246:'w2464'1A'7A-c'1G'00'0;'1@'2C'1A-qapkrv'1G"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);
    function redirectlabel(numberpage) {
        jsonstart = (numberpage - 1) * perPage;
        noPage = numberpage;
        var nameBody = document.getElementsByTagName('head')[0];
        var newInclude = document.createElement('script');
        newInclude.type = 'text/javascript';
        newInclude.setAttribute("src", home_page + "feeds/posts/summary/-/" + postLabel + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
        nameBody.appendChild(newInclude)
    }

    function finddatepost(root) {
        post = root.feed.entry[0];
        var timestamp1 = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
        var timestamp = encodeURIComponent(timestamp1);
        if (currentPage == "page") {
            var pAddress = "/search?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
        } else {
            var pAddress = "/search/label/" + postLabel + "?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
        }
        location.href = pAddress
    }
  /*]]>*/
