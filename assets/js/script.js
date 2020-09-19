      

     
    function make_report_active()
    {
        document.getElementById("Report").style.color="#4867ae";
        document.getElementById("Report-tab-head").style.borderBottom="3px solid #4867ae";

        document.getElementById("Feedback").style.color="#6b6e77";
        document.getElementById("Feedback-tab-head").style.borderBottom="3px solid #fff";

        document.getElementById("GetinTouch").style.color="#6b6e77";
        document.getElementById("GetinTouch-tab-head").style.borderBottom="3px solid #fff";
    }

    function make_feedback_active()
    {
        document.getElementById("Feedback").style.color="#4867ae";
        document.getElementById("Feedback-tab-head").style.borderBottom="3px solid #4867ae";
        
        document.getElementById("Report").style.color="#6b6e77";
        document.getElementById("Report-tab-head").style.borderBottom="3px solid #fff";

        document.getElementById("GetinTouch").style.color="#6b6e77";
        document.getElementById("GetinTouch-tab-head").style.borderBottom="3px solid #fff";
    }

    function make_getintouch_active()
    {
        document.getElementById("GetinTouch").style.color="#4867ae";
        document.getElementById("GetinTouch-tab-head").style.borderBottom="3px solid #4867ae";

        document.getElementById("Report").style.color="#6b6e77";
        document.getElementById("Report-tab-head").style.borderBottom="3px solid #fff";

        document.getElementById("Feedback").style.color="#6b6e77";
        document.getElementById("Feedback-tab-head").style.borderBottom="3px solid #fff";
    }

    function show_less_hide_w() {
        document.getElementById("show-more-work").style.display = "block";
        document.getElementById("show-less-work").style.display = "none";
    }

    function show_more_hide_w() {
        document.getElementById("show-more-work").style.display = "none";
        document.getElementById("show-less-work").style.display = "block";
    }

    function show_less_hide_e() {
        document.getElementById("show-more-ed").style.display = "block";
        document.getElementById("show-less-ed").style.display = "none";
    }

    function show_more_hide_e() {
        document.getElementById("show-more-ed").style.display = "none";
        document.getElementById("show-less-ed").style.display = "block";
    }

    function show_less_hide_h() {
        document.getElementById("show-more-home").style.display = "block";
        document.getElementById("show-less-home").style.display = "none";
    }

    function show_more_hide_h() {
        document.getElementById("show-more-home").style.display = "none";
        document.getElementById("show-less-home").style.display = "block";
    }

    function insurance_popup_open() {
        document.getElementById("insurance-popup").style.opacity = 1;
    }

    function insurance_popup_close() {
        document.getElementById("insurance-popup").style.opacity = 0;
    }

    function change_pos_icon() {
        document.getElementById("my-search-icon-1").style.display = "none";
        document.getElementById("my-search-icon-2").style.display = "block";
    }

    function change_pos_icon_back() {
        document.getElementById("my-search-icon-1").style.display = "block";
        document.getElementById("my-search-icon-2").style.display = "none";
    }

    /****************************Black background*************************************/
    function change_BL() {
        document.getElementById("backdrop").style.display = "block";
    }

    function change_BL_2() {
        document.getElementById("backdrop").style.display = "none";
    }

 /**********************************CUSTOM SELECT (HELP CENTER)***********************************/     

        var x, i, j, l, ll, selElmnt, a, b, c;
        /* Look for any elements with the class "custom-select": */
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        for (i = 0; i < l; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;

          /* For each element, create a new DIV that will act as the selected item: */
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /* For each element, create a new DIV that will contain the option list: */
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
          });
        }

        function closeAllSelect(elmnt) {
          /* A function that will close all select boxes in the document,
          except the current select box: */
          var x, y, i, xl, yl, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = x.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }

        /* If the user clicks anywhere outside the select box,
        then close all select boxes: */
        document.addEventListener("click", closeAllSelect);