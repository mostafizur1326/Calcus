let need_fit1 = document.querySelector(".need_fit1");
let need_fit2 = document.querySelector(".need_fit2");
let need_fit3 = document.querySelector(".need_fit3");
let need_fit4 = document.querySelector(".need_fit4");

let need_fit_value1 = need_fit1.getAttribute("value");
let need_fit_value2 = need_fit2.getAttribute("value");
let need_fit_value3 = need_fit3.getAttribute("value");
let need_fit_value4 = need_fit4.getAttribute("value");

let add_percent_btn = document.querySelector(".add_percent_btn");
let percentageBtn = document.querySelectorAll(".percentage button");

let input_need_value = document.querySelector(".input_need_value");
let calculate_btn = document.querySelector(".calculate_btn");

let output_field = document.querySelector(".output_field");

let plus_percent1 = document.querySelector(".plus_percent1");
let plus_percent2 = document.querySelector(".plus_percent2");
let plus_percent3 = document.querySelector(".plus_percent3");
let minus_percent1 = document.querySelector(".minus_percent1");
let minus_percent2 = document.querySelector(".minus_percent2");
let minus_percent3 = document.querySelector(".minus_percent3");

let plus_percent_value1 = plus_percent1.getAttribute("value");
let plus_percent_value2 = plus_percent2.getAttribute("value");
let plus_percent_value3 = plus_percent3.getAttribute("value");
let minus_percent_value1 = minus_percent1.getAttribute("value");
let minus_percent_value2 = minus_percent2.getAttribute("value");
let minus_percent_value3 = minus_percent3.getAttribute("value");

let _click = 0;



function ssRoundPipe() {
  let round_pipe = document.querySelector("#round_pipe");
  let round_size = document.querySelector(".round_size");

  let ss_round_pipe_size1 = "";
  let ss_round_pipe_size2 = "";
  let ss_round_pipe_size3 = "";
  let ss_round_pipe_size4 = "";
  let ss_round_pipe_size5 = "";
  let ss_round_pipe_size6 = "";
  let ss_round_pipe_size7 = "";
  let ss_round_pipe_size8 = "";
  let ss_round_pipe_size9 = "";
  let ss_round_pipe_size10 = "";
  let ss_round_pipe_size11 = "";
  let ss_round_pipe_size12 = "";
  let ss_round_pipe_size13 = "";
  let ss_round_pipe_size14 = "";
  let ss_round_pipe_size15 = "";


  round_pipe.addEventListener("change", (e) => {
    if (e.target.value === "1/4") {
      oneFour.forEach((val) => {
        ss_round_pipe_size1 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="358">${val.size5}</option></select>`
        round_size.innerHTML = ss_round_pipe_size1;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "3/8") {
      threeEight.forEach((val) => {
        ss_round_pipe_size2 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="253">${val.size1}</option><option value="303">${val.size2}</option><option value="352">${val.size3}</option><option value="424">${val.size4}</option><option value="446">${val.size5}</option><option value="528">${val.size6}</option><option value="660">${val.size7}</option><option value="847">${val.size8}</option></select>`
        round_size.innerHTML = ss_round_pipe_size2;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1/2") {
      oneTwe.forEach((val) => {
        ss_round_pipe_size3 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="358">${val.size1}</option><option value="396">${val.size2}</option><option value="495">${val.size3}</option><option value="561">${val.size4}</option><option value="611">${val.size5}</option><option value="743">${val.size6}</option><option value="891">${val.size7}</option><option value="1089">${val.size8}</option><option value="1524">${val.size9}</option></select>`
        round_size.innerHTML = ss_round_pipe_size3;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "5/8") {
      fiveEight.forEach((val) => {
        ss_round_pipe_size4 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="451">${val.size1}</option><option value="528">${val.size2}</option><option value="622">${val.size3}</option><option value="721">${val.size4}</option><option value="787">${val.size5}</option><option value="962">${val.size6}</option><option value="1172">${val.size7}</option><option value="1391">${val.size8}</option></select>`
        round_size.innerHTML = ss_round_pipe_size4;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "3/4") {
      threeFour.forEach((val) => {
        ss_round_pipe_size5 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="534">${val.size1}</option><option value="622">${val.size2}</option><option value="759">${val.size3}</option><option value="875">${val.size4}</option><option value="962">${val.size5}</option><option value="1172">${val.size6}</option><option value="1408">${val.size7}</option><option value="1689">${val.size8}</option><option value="2205">${val.size9}</option></select>`
        round_size.innerHTML = ss_round_pipe_size5;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "7/8") {
      sevenEight.forEach((val) => {
        ss_round_pipe_size6 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="640">${val.size1}</option><option value="726">${val.size2}</option><option value="820">${val.size3}</option><option value="1018">${val.size4}</option><option value="1139">${val.size5}</option><option value="1364">${val.size6}</option><option value="1645">${val.size7}</option><option value="1946">${val.size8}</option><option value="2783">${val.size9}</option></select>`
        round_size.innerHTML = ss_round_pipe_size6;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1") {
      one.forEach((val) => {
        ss_round_pipe_size7 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="677">${val.size1}</option><option value="803">${val.size2}</option><option value="903">${val.size3}</option><option value="1155">${val.size4}</option><option value="1304">${val.size5}</option><option value="1568">${val.size6}</option><option value="1925">${val.size7}</option><option value="2398">${val.size8}</option><option value="3036">${val.size9}</option><option value="3737">${val.size10 }</option></select>`
        round_size.innerHTML = ss_round_pipe_size7;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "11/4") {
      elevenFour.forEach((val) => {
        ss_round_pipe_size8 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="1017">${val.size2}</option><option value="1282">${val.size3}</option><option value="1480">${val.size4}</option><option value="1628">${val.size5}</option><option value="2013">${val.size6}</option><option value="2398">${val.size7}</option><option value="2959">${val.size8}</option><option value="3834">${val.size9}</option><option value="4796">${val.size10}</option><option value="5759">${val.size11}</option></select>`
        round_size.innerHTML = ss_round_pipe_size8;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "11/2") {
      elevenTwe.forEach((val) => {
        ss_round_pipe_size9 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="1375">${val.size2}</option><option value="1474">${val.size3}</option><option value="1755">${val.size4}</option><option value="1953">${val.size5}</option><option value="2415">${val.size6}</option><option value="2932">${val.size7}</option><option value="3614">${val.size8}</option><option value="4736">${val.size9}</option><option value="5951">${val.size10}</option><option value="7277">${val.size11}</option></select>`
        round_size.innerHTML = ss_round_pipe_size9;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "13/4") {
      thirteenFour.forEach((val) => {
        ss_round_pipe_size10 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="2145">${val.size5}</option><option value="2756">${val.size6}</option><option value="3168">${val.size7}</option><option value="4147">${val.size8}</option><option value="4455">${val.size9}</option></select>`
        round_size.innerHTML = ss_round_pipe_size10;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "2") {
      twe.forEach((val) => {
        ss_round_pipe_size11 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="1672">${val.size2}</option><option value="2008">${val.size3}</option><option value="2371">${val.size4}</option><option value="2635">${val.size5}</option><option value="3229">${val.size6}</option><option value="3966">${val.size7}</option><option value="4796">${val.size8}</option><option value="6320">${val.size9}</option><option value="7843">${val.size10}</option><option value="9471">${val.size11}</option></select>`
        round_size.innerHTML = ss_round_pipe_size11;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "21/4") {
      twentyoneFour.forEach((val) => {
        ss_round_pipe_size12 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="2888">${val.size5}</option><option value="3625">${val.size6}</option><option value="4296">${val.size7}</option><option value="5330">${val.size8}</option><option value="7343">${val.size9}</option></select>`
        round_size.innerHTML = ss_round_pipe_size12;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "21/2") {
      twentyoneTwe.forEach((val) => {
        ss_round_pipe_size13 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="2129">${val.size2}</option><option value="2552">${val.size3}</option><option value="2960">${val.size4}</option><option value="3289">${val.size5}</option><option value="3966">${val.size6}</option><option value="4796">${val.size7}</option><option value="6231">${val.size8}</option><option value="7937">${val.size9}</option><option value="9916">${val.size10}</option><option value="11092">${val.size11}</option></select>`
        round_size.innerHTML = ss_round_pipe_size13;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "3") {
      three.forEach((val) => {
        ss_round_pipe_size14 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="3009">${val.size3}</option><option value="3707">${val.size4}</option><option value="3878">${val.size5}</option><option value="4763">${val.size6}</option><option value="5924">${val.size7}</option><option value="7255">${val.size8}</option><option value="9576">${val.size9}</option><option value="12227">${val.size10}</option><option value="14152">${val.size11}</option></select>`
        round_size.innerHTML = ss_round_pipe_size14;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "4") {
      elevenTwe.forEach((val) => {
        ss_round_pipe_size15 += `<select name="round_pipe_size" id="round_size"><option value="Round Size">Round Size</option><option value="6512">${val.size6}</option><option value="7843">${val.size7}</option><option value="9768">${val.size8}</option><option value="13173">${val.size9}</option><option value="18502">${val.size10}</option><option value="22644">${val.size11}</option></select>`
        round_size.innerHTML = ss_round_pipe_size15;

        let size_value_round = document.querySelector("#round_size");
        size_value_round.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }
  })
}
ssRoundPipe();

function ssBoxPipe() {
  let box_pipe = document.querySelector("#box_pipe");
  let box_size = document.querySelector(".box_size");

  let ss_box_pipe_size1 = "";
  let ss_box_pipe_size2 = "";
  let ss_box_pipe_size3 = "";
  let ss_box_pipe_size4 = "";
  let ss_box_pipe_size5 = "";
  let ss_box_pipe_size6 = "";
  let ss_box_pipe_size7 = "";
  let ss_box_pipe_size8 = "";
  let ss_box_pipe_size9 = "";
  let ss_box_pipe_size10 = "";


  box_pipe.addEventListener("change", (e) => {
    if (e.target.value === "3/8x3/8") {
      threeEightXthreeEight.forEach((val) => {
        ss_box_pipe_size1 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="472">${val.size2}</option><option value="534">${val.size3}</option><option value="622">${val.size5}</option><option value="754">${val.size6}</option><option value="891">${val.size7}</option></select>`

        box_size.innerHTML = ss_box_pipe_size1;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1/2x1/2") {
      oneTweXoneTwe.forEach((val) => {
        ss_box_pipe_size2 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="578">${val.size2}</option><option value="638">${val.size3}</option><option value="792">${val.size4}</option><option value="803">${val.size5}</option><option value="990">${val.size6}</option><option value="1162">${val.size7}</option><option value="1414">${val.size8}</option></select>`

        box_size.innerHTML = ss_box_pipe_size2;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "5/8x5/8") {
      fiveEightXfiveEight.forEach((val) => {
        ss_box_pipe_size3 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="990">${val.size5}</option><option value="1199">${val.size6}</option><option value="1436">${val.size7}</option><option value="1776">${val.size8}</option></select>`

        box_size.innerHTML = ss_box_pipe_size3;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "3/4x3/4") {
      threeFourXthreeFour.forEach((val) => {
        ss_box_pipe_size4 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="913">${val.size2}</option><option value="1018">${val.size3}</option><option value="1265">${val.size4}</option><option value="1304">${val.size5}</option><option value="1584">${val.size6}</option><option value="1898">${val.size7}</option><option value="2371">${val.size8}</option><option value="2959">${val.size9}</option></select>`

        box_size.innerHTML = ss_box_pipe_size4;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1x1") {
      oneXone.forEach((val) => {
        ss_box_pipe_size5 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="1111">${val.size2}</option><option value="1309">${val.size3}</option><option value="1474">${val.size4}</option><option value="1673">${val.size5}</option><option value="2013">${val.size6}</option><option value="2415">${val.size7}</option><option value="2992">${val.size8}</option><option value="3999">${val.size9}</option></select>`

        box_size.innerHTML = ss_box_pipe_size5;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "11/4x11/4") {
      elevenFourXelevenFour.forEach((val) => {
        ss_box_pipe_size6 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="1760">${val.size3}</option><option value="1821">${val.size4}</option><option value="2074">${val.size5}</option><option value="2475">${val.size6}</option><option value="2959">${val.size7}</option><option value="3674">${val.size8}</option><option value="5077">${val.size9}</option></select>`

        box_size.innerHTML = ss_box_pipe_size6;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "11/2x11/2") {
      elevenTweXelevenTwe.forEach((val) => {
        ss_box_pipe_size7 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="2277">${val.size3}</option><option value="2310">${val.size4}</option><option value="2590">${val.size5}</option><option value="3124">${val.size6}</option><option value="3850">${val.size7}</option><option value="4648">${val.size8}</option><option value="6072">${val.size9}</option><option value="7596">${val.size10}</option></select>`

        box_size.innerHTML = ss_box_pipe_size7;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "2x2") {
      tweXtwe.forEach((val) => {
        ss_box_pipe_size8 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="2338">${val.siz2}</option><option value="2629">${val.size3}</option><option value="3020">${val.size4}</option><option value="3212">${val.size5}</option><option value="4120">${val.size6}</option><option value="4884">${val.size7}</option><option value="6248">${val.size8}</option><option value="7981">${val.size9}</option></select>`

        box_size.innerHTML = ss_box_pipe_size8;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "21/2x21/2") {
      twentyoneTweXtwentyoneTwe.forEach((val) => {
        ss_box_pipe_size9 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="5478">${val.size6}</option><option value="6072">${val.size7}</option><option value="7458">${val.size8}</option><option value="10555">${val.size9}</option></select>`

        box_size.innerHTML = ss_box_pipe_size9;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "3x3") {
      threeXthree.forEach((val) => {
        ss_box_pipe_size10 += `<select name="box_pipe_size" id="box_size" ><option value="Box Size">Box Size</option><option value="6626">${val.size6}</option><option value="7552">${val.size7}</option><option value="9312">${val.size8}</option><option value="12447">${val.size9}</option></select>`

        box_size.innerHTML = ss_box_pipe_size10;

        let size_value_box = document.querySelector("#box_size");
        size_value_box.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }
  })
}
ssBoxPipe();

function ssRectangularPipe() {
  let rectangular_pipe = document.querySelector("#rectangular_pipe");
  let rectangular_size = document.querySelector(".rectangular_size");

  let ss_rectangular_pipe_size1 = "";
  let ss_rectangular_pipe_size2 = "";
  let ss_rectangular_pipe_size3 = "";
  let ss_rectangular_pipe_size4 = "";
  let ss_rectangular_pipe_size5 = "";
  let ss_rectangular_pipe_size6 = "";
  let ss_rectangular_pipe_size7 = "";
  let ss_rectangular_pipe_size8 = "";
  let ss_rectangular_pipe_size9 = "";
  let ss_rectangular_pipe_size10 = "";
  let ss_rectangular_pipe_size11 = "";
  let ss_rectangular_pipe_size12 = "";
  let ss_rectangular_pipe_size13 = "";
  let ss_rectangular_pipe_size14 = "";
  let ss_rectangular_pipe_size15 = "";
  let ss_rectangular_pipe_size16 = "";
  let ss_rectangular_pipe_size17 = "";
  let ss_rectangular_pipe_size18 = "";


  rectangular_pipe.addEventListener("change", (e) => {
    if (e.target.value === "1/2x3/4") {
      oneTweXthreeFour.forEach((val) => {
        ss_rectangular_pipe_size1 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="726">${val.size3}</option><option value="886">${val.size4}</option><option value="990">${val.size5}</option><option value="1216">${val.size6}</option><option value="1469">${val.size7}</option><option value="1821">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size1;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1/2x1") {
      oneTweXone.forEach((val) => {
        ss_rectangular_pipe_size2 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="941">${val.size3}</option><option value="1084">${val.size4}</option><option value="1238">${val.size5}</option><option value="1524">${val.size6}</option><option value="1925">${val.size7}</option><option value="2206">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size2;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1/2x11/2") {
      oneTweXelevenTwe.forEach((val) => {
        ss_rectangular_pipe_size3 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="1227">${val.size3}</option><option value="1386">${val.size4}</option><option value="1667">${val.size5}</option><option value="1997">${val.size6}</option><option value="2431">${val.size7}</option><option value="3064">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size3;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "3/4x11/2") {
      threeFourXelevenTwe.forEach((val) => {
        ss_rectangular_pipe_size4 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="2090">${val.size5}</option><option value="2475">${val.size6}</option><option value="2811">${val.size7}</option><option value="3553">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size4;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1x11/2") {
      oneXelevenTwe.forEach((val) => {
        ss_rectangular_pipe_size5 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="1557">${val.size3}</option><option value="1832">${val.size4}</option><option value="2145">${val.size5}</option><option value="2574">${val.size6}</option><option value="3080">${val.size7}</option><option value="3817">${val.size8}</option><option value="5033">${val.size9}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size5;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1/2x2") {
      oneTweXtwe.forEach((val) => {
        ss_rectangular_pipe_size6 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="1485">${val.size3}</option><option value="1667">${val.size4}</option><option value="2046">${val.size5}</option><option value="2590">${val.size6}</option><option value="3064">${val.size7}</option><option value="3850">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size6;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "5/8x21/2") {
      fiveEightXtwentyonetwe.forEach((val) => {
        ss_rectangular_pipe_size7 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="3212">${val.size6}</option><option value="3950">${val.size7}</option><option value="4857">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size7;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1/2x21/4") {
      oneTweXtwentyoneFour.forEach((val) => {
        ss_rectangular_pipe_size8 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="2563">${val.size5}</option><option value="3168">${val.size6}</option><option value="3702">${val.size7}</option><option value="4587">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size8;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1x2") {
      oneXtwe.forEach((val) => {
        ss_rectangular_pipe_size9 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="1914">${val.size3}</option><option value="2255">${val.size4}</option><option value="2530">${val.size5}</option><option value="3047">${val.size6}</option><option value="3718">${val.size7}</option><option value="4648">${val.size8}</option><option value="5935">${val.size9}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size9;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "11/2x21/2") {
      elevenTweXtwentyoneTwe.forEach((val) => {
        ss_rectangular_pipe_size10 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="4950">${val.size7}</option><option value="6050">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size10;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1x3") {
      oneXthree.forEach((val) => {
        ss_rectangular_pipe_size11 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="2855">${val.size4}</option><option value="3212">${val.size5}</option><option value="4147">${val.size6}</option><option value="4917">${val.size7}</option><option value="6215">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size11;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "11/4x3") {
      elevenFourXthree.forEach((val) => {
        ss_rectangular_pipe_size12 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="5346">${val.size7}</option><option value="6490">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size12;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "11/2x2") {
      elevenTweXtwe.forEach((val) => {
        ss_rectangular_pipe_size13 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="3179">${val.size5}</option><option value="3625">${val.size6}</option><option value="4323">${val.size7}</option><option value="5346">${val.size8}</option><option value="7106">${val.size9}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size13;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1x21/2") {
      oneXtwentyoneTwe.forEach((val) => {
        ss_rectangular_pipe_size14 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="4290">${val.size7}</option><option value="5434">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size14;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "2x3") {
      tweXthree.forEach((val) => {
        ss_rectangular_pipe_size15 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="5302">${val.size6}</option><option value="6072">${val.size7}</option><option value="7552">${val.size8}</option><option value="10659">${val.size9}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size15;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "2x4") {
      tweXfour.forEach((val) => {
        ss_rectangular_pipe_size16 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="6628">${val.size6}</option><option value="8437">${val.size7}</option><option value="9180">${val.size8}</option><option value="12210">${val.size9}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size16;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "1/2x21/2") {
      oneTweXtwentyoneTwe.forEach((val) => {
        ss_rectangular_pipe_size17 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="2563">${val.size5}</option><option value="3168">${val.size6}</option><option value="3702">${val.size7}</option><option value="4587">${val.size8}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size17;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }

    else if (e.target.value === "3x11/2") {
      threeXelevenTwe.forEach((val) => {
        ss_rectangular_pipe_size18 += `<select name="rectangular_pipe_size" id="rectangular_size"><option value="Rectangular Size">Rectangular Size</option><option value="9800">${val.size9}</option></select>`
        rectangular_size.innerHTML = ss_rectangular_pipe_size18;

        let size_value_rectangular = document.querySelector("#rectangular_size");
        size_value_rectangular.addEventListener("change", (e) => {
          //------ Clicked Add Percent Button -----//

          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }
          add_percent_btn.onclick = () => {
            percentageBtn.forEach((btns) => {
              btns.removeAttribute("disabled")
            })
          }

          //---- Clicked Fit Button & Add Percent ----//

          need_fit1.onclick = () => {

            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value1;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value1}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value1}`;
                _click = 0;
              }
            }
          }

          need_fit2.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value2;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value2}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value2}`;
                _click = 0;
              }
            }
          }

          need_fit3.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value3;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value3}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value3}`;
                _click = 0;
              }
            }
          }

          need_fit4.onclick = () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * need_fit_value4;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * plus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value1 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value2 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4 / 100 * -minus_percent_value3 + e.target.value / 20 * need_fit_value4}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * need_fit_value4}`;
                _click = 0;
              }
            }

          }

          calculate_btn.addEventListener("click", () => {
            output_field.innerText = "Total Amount: " + e.target.value / 20 * input_need_value.value;

            //---- Add Plus Percent Button ----//

            plus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            plus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * plus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            //---- Add Minus Percent Button ----//

            minus_percent1.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value1 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent2.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value2 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }

            minus_percent3.onclick = () => {
              if (_click == 0) {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value / 100 * -minus_percent_value3 + e.target.value / 20 * input_need_value.value}`;
                _click = 1;
              } else {
                output_field.innerHTML = `Total Amount: ${e.target.value / 20 * input_need_value.value}`;
                _click = 0;
              }
            }
          })
        })
      })
    }
  })
}
ssRectangularPipe();
