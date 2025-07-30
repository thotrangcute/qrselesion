const minRes = 64;
const maxRes = 1024;
const steps = 20;

function updateSliderValue(value) {
  const resolution = Math.round(
    minRes + ((value - 1) * (maxRes - minRes)) / steps
  );
  $("#sliderValue").text(`${resolution} x ${resolution} px`);

  const slider = $("#qualitySlider");
  const min = parseInt(slider.attr("min"));
  const max = parseInt(slider.attr("max"));
  const percent = ((value - min) / (max - min)) * 100;

  $("#sliderValue").css({
    left: `calc(${percent}% )`,
    transform: "translateX(-50%)",
  });

  slider.css(
    "background",
    `linear-gradient(to right, #3399ff 0%, #3399ff ${percent}%, #cce5ff ${percent}%, #cce5ff 100%)`
  );
  console.log($("#sliderValue"));
}

$(document).ready(function () {
  const slider = $("#qualitySlider");

  slider.on("input", function () {
    updateSliderValue(parseInt($(this).val()));
  });

  updateSliderValue(parseInt(slider.val()));
  console.log(slider);
});
/* url*/

const items = $(".sabothammuu");
const listDiv = $("#contentierList");
const contentOne = $("#conternierOne");
const contentmore = $(".contentier-onemore");

const defaultContent = `
<div class = "content">
 <p class ="content-write">URL</p>
 <input class="content-input" type="text" placeholder="https://dingdong.io/" />
 <div class="error-input input-error"></div>
</div>
`;
listDiv.css("display", "block");
listDiv.html(defaultContent);
attachInputEvent();

if (contentmore.length > 0) {
  contentmore.first().addClass("active");
}
contentmore.click(function (e) {
  contentmore.removeClass("active");
  $(this).addClass("active");
  e.stopPropagation();
});
items.click(function (e) {
  const isVisible = listDiv.css("display", "block");

  items.find(".onemore-iconmomen").html("&#8743;");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDiv.css("display", "block");
  listDiv.html(defaultContent);
  e.stopPropagation();
});
function attachInputEvent() {
  const input = $(".content-input");
  const aceImg = $(".ace-images");
  const colorRadio = $("#gradientColorRadio");
  const imageCheckbox = $("#customEyeCheckbox");

  if (input.length === 0) return;
  input.keydown(function (event) {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const value = $(this).val().trim();
    const errorDiv = $(this).siblings(".error-input");
    if (!value) {
      errorDiv.text("please enter your url");
      aceImg.attr("src", "/qrselector/img/qr to.png");
    } else {
      errorDiv.text("");
      if (aceImg.length) {
        if (colorRadio.prop("checked") && imageCheckbox.prop("checked")) {
          aceImg.attr("src", "qrselector/img/urlchec2.png");
        } else if (colorRadio.prop("checked")) {
          aceImg.attr("src", "qrselector/img/urlcheck1.png");
        } else if (imageCheckbox.prop("checked")) {
          aceImg.attr("src", "qrselector/img/urlchec3.png");
        } else {
          aceImg.attr("src", "qrselector/img/qr to đen.png ");
        }
      }
    }
  });
}
/*

const items = document.querySelectorAll(".sabothammuu");
const listDiv = document.getElementById("contentierList");
const contentOne = document.getElementById("conternierOne");
const contentmore = document.querySelectorAll(".contentier-onemore");

const defaultContent = `
<div class="content">
<p class="content-write">URL</p>
    <input class="content-input" type="text" placeholder="https://dingdong.io/" />
    <div class="error-input input-error"></div>
    </div>
    `;

listDiv.style.display = "block";
listDiv.innerHTML = defaultContent;
attachInputEvent();

if (contentmore.length > 0) {
  contentmore[0].classList.add("active");
}

if (contentmore) {
  contentmore.forEach(function (item) {
    item.addEventListener("click", function (e) {
      document.querySelectorAll(".contentier-onemore").forEach((el) => {
        el.classList.remove("active");

        this.classList.add("active");

        e.stopPropagation();
      });
    });
  });
  console.log(contentmore);
}

items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDiv.style.display === "block";
    items.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8743;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";

    listDiv.style.display = "block";
    listDiv.innerHTML = defaultContent;

    e.stopPropagation();
  });
  console.log(items);
});

function attachInputEvent() {
  const input = document.querySelector(".content-input");
  const aceImg = document.querySelector(".ace-images");
  const colorRadio = document.getElementById("gradientColorRadio");
  const imageCheckbox = document.getElementById("customEyeCheckbox");

  if (!input) return;

  input.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;

    event.preventDefault();

    const value = input.value.trim();
    const errorDiv = input.parentElement?.querySelector(".error-input");

    if (!value) {
      if (errorDiv) errorDiv.textContent = "Please enter your URL!";
      if (aceImg) aceImg.src = "qrselector/img/qrto.png";
    } else {
      if (errorDiv) errorDiv.textContent = "";

      if (aceImg) {
        if (
          colorRadio &&
          colorRadio.checked &&
          imageCheckbox &&
          imageCheckbox.checked
        ) {
          aceImg.src = "qrselector/img/urlchec2.png";
        } else if (colorRadio && colorRadio.checked) {
          aceImg.src = "qrselector/img/urlcheck1.png";
        } else if (imageCheckbox && imageCheckbox.checked) {
          aceImg.src = "qrselector/img/urlchec3.png";
        } else {
          aceImg.src = "qrselector/img/qr to đen.png";
        }
      }
    }
  });
}
  */
/* facebook */

const aechoaquyen = $(".acehoaquyen");
const listDivion = $("#contentierList");

contentmore.click(function (e) {
  const isVisible = listDivion.css("display", "block");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
});

aechoaquyen.click(function () {
  listDivion.html(`
<div class="contentiton">
  <p class="content-write"> Your Facebook URL</p>
  <input class="content-input" type="text" placeholder="https://Facebook.com/"/>
  <div class="error-input input-error"></div>
</div>
`);
  const inputs = $(".content-input");
  const aceImg = $(".ace-images");
  const colorRadio = $("#gradientColorRadio");
  const imageCheckbox = $("#customEyeCheckbox ");

  if (inputs.length === 0) return;
  inputs.keydown(function (event) {
    if (event.key !== "Enter") return;
    event.preventDefault;
    const value = $(this).val().trim();
    const errorDiv = $(this).siblings(".error-input");
    if (!value) {
      errorDiv.text("please enter your FACEBOOK!");
      aecImg.attr("src", "qrselector/img/qr to.png");
    } else {
      errorDiv.text("");
      if (aceImg.length) {
        if (colorRadio.prop("checked") && imageCheckbox.prop("checked")) {
          aceImg.attr("src", "qrselector/img/urlchec2.png");
        } else if (colorRadio.prop("checked")) {
          aceImg.attr("src", "qrselector/img/urlcheck1.png");
        } else if (imageCheckbox.prop("checked")) {
          aceImg.attr("src", "qrselector/img/urlchec3.png");
        } else {
          aceImg.attr("src", "qrselector/img/qr to đen.png ");
        }
      }
    }
  });
});
aechoaquyen.on("click", function (e) {
  const isVisible = listDivion.is(":visible");

  aechoaquyen.find(".onemore-iconmomen").html("&#8743;");

  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
});
/*
const aechoaquyen = document.querySelectorAll(".acehoaquyen");
const listDivion = document.getElementById("contentierList");
contentmore.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    contentmore.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8743;" : "&#8744;";
  });
  console.log(contentmore);
});
aechoaquyen.forEach((item) => {
  item.addEventListener("click", () => {
    listDivion.innerHTML = `
      <div class="contentiton">
        <p class="content-write"> Your Facebook URL</p>
        <input class="content-input" type="text" placeholder="https://Facebook.com/"/>
        <div class="error-input input-error"></div>
      </div>
    `;
    const inputs = document.querySelector(".content-input");
    const aceImg = document.querySelector(".ace-images");
    const colorRadio = document.getElementById("gradientColorRadio");
    const imageCheckbox = document.getElementById("customEyeCheckbox");

    if (!inputs) return;

    inputs.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const value = inputs.value.trim();
        const errorDiv = inputs.parentElement.querySelector(".error-input");

        if (!value) {
          if (errorDiv) errorDiv.textContent = "Please enter your FACEBOOK!";
          if (aceImg) aceImg.src = "qrselector/img/qrto.png";
        } else {
          if (errorDiv) errorDiv.textContent = "";

          if (aceImg) {
            if (
              colorRadio &&
              colorRadio.checked &&
              imageCheckbox &&
              imageCheckbox.checked
            ) {
              aceImg.src = "qrselector/img/urlchec2.png";
            } else if (colorRadio && colorRadio.checked) {
              aceImg.src = "qrselector/img/urlcheck1.png";
            } else if (imageCheckbox && imageCheckbox.checked) {
              aceImg.src = "qrselector/img/urlchec3.png";
            } else {
              aceImg.src = "qrselector/img/qr to đen.png";
            }
          }
        }
      }
    });
  });
});
console.log(aechoaquyen);
aechoaquyen.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    aechoaquyen.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";

    listDivion.style.display = "block";
  });
  console.log(aechoaquyen);
});
/* text */

const aecfiveText = $(".aecfiveText");
aecfiveText.click(function (e) {
  const isVisible = listDivion.is(":visible");

  aecfiveText.find(".onemore-iconmomen").html("&#8743;");

  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
contentmore.click(function (e) {
  const isVisible = listDivion.css("display", "block");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
aecfiveText.click(function () {
  listDivion.html(`
<div class="content">
    <p class="content-write"> Your text URL</p>
    <textarea class="content-inputertion" type="text" placeholder="Enter your text here..."></textarea>
    <p class="content-aceptexxt"> Line breaks are allowed</p>
</div>
`);
});

/*
const aecfiveText = document.querySelectorAll(".aecfiveText");
aecfiveText.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    aecfiveText.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";

    listDivion.style.display = "block";
  });
  console.log(aecfiveText);
});
contentmore.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    contentmore.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";
  });
  console.log(contentmore);
});
aecfiveText.forEach((item) => {
  item.addEventListener("click", () => {
    listDivion.innerHTML = `
    <div class="content">
    <p class="content-write"> Your text URL</p>
    <textarea class="content-inputertion" type="text" placeholder="Enter your text here..."></textarea>
    <p class="content-aceptexxt"> Line breaks are allowed</p>
    </div>
    `;
  });
  console.log(aecfiveText);
});

/* email */

const aeconeEmail = $(".aeconeEmail");
aeconeEmail.click(function (e) {
  const isVisible = listDivion.is(":visible");

  aeconeEmail.find(".onemore-iconmomen").html("&#8743;");

  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
console.log(aeconeEmail);
contentmore.click(function (e) {
  const isVisible = listDivion.css("display", "block");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
aeconeEmail.click(function () {
  listDivion.html(`
<div class="content">
       <p class="content-pier">Your Email</p>
        <input class="content-className" type="text" placeholder="dhfakf@outlook.com"/>
        <div class="error-input input-error"></div>
        <p class="content-pier">Subject</p>
        <input class="content-classfive" type="text" placeholder="enter your subject"/>
        <div class="error-butinput"></div>
       <p class="content-write"> Your Facebook URL</p>
        <textarea class="content-inputertion" type="text" placeholder="Enter your text here..."></textarea>
        <p class="content-aceptexxt"> Line breaks are allowed</p>
</div>
`);
  $(".content-className,.content-classfive").keydown(function (event) {
    if (event.key === "Enter") {
      const input = $(this);
      const value = input.val().trim();
      const parent = input.parent();
      const errorDiv = parent.find(".error-input");
      const errorButin = parent.find(".error-butinput");
      if (value === "") {
        event.preventDeflault();
        errorDiv.text("please enter your email!");
        errorButin.text("please enter subjext!");
      } else {
        errorDiv.text("");
        errorButin.text("");
      }
    }
  });
});

/*

const aeconeEmail = document.querySelectorAll(".aeconeEmail");

aeconeEmail.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    aeconeEmail.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";

    listDivion.style.display = "block";
  });
  console.log(aeconeEmail);
});
contentmore.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    contentmore.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";
  });
  console.log(contentmore);
});
aeconeEmail.forEach((item) => {
  item.addEventListener("click", () => {
    listDivion.innerHTML = `
      <div class="content">
       <p class="content-pier">Your Email</p>
        <input class="content-className" type="text" placeholder="dhfakf@outlook.com"/>
        <div class="error-input input-error"></div>
        <p class="content-pier">Subject</p>
        <input class="content-classfive" type="text" placeholder="enter your subject"/>
        <div class="error-butinput"></div>
       <p class="content-write"> Your Facebook URL</p>
        <textarea class="content-inputertion" type="text" placeholder="Enter your text here..."></textarea>
        <p class="content-aceptexxt"> Line breaks are allowed</p>
      </div>
    `;
    const inputs = document.querySelectorAll(
      ".content-className,.content-classfive"
    );
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const errorDiv = input.parentElement.querySelector(".error-input");
          const errorbutin =
            input.parentElement.querySelector(".error-butinput");

          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your email!";
            errorbutin.textContent = "Please enter subject!";
          } else {
            errorDiv.textContent = "";
            errorbutin.textContent = "";
          }
        }
      });
    });
  });
  console.log(aeconeEmail);
});
*/
/* iphone*/

const aceonephone = $(".aceonephone");
aceonephone.click(function (e) {
  const isVisible = listDivion.is(":visible");

  aceonephone.find(".onemore-iconmomen").html("&#8743;");

  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
contentmore.click(function (e) {
  const isVisible = listDivion.css("display", "block");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
aceonephone.click(function () {
  listDivion.html(`
<div class="content">
        <p class="content-write">Your phone number</p>
        <input class="content-input" type="number" placeholder="03942346934"/>
        <div class="error-input input-error"></div>
</div>
`);
  $(".content-input").keydown(function (event) {
    if (event.key === "Enter") {
      const value = $(this).val().trim();
      const errorDiv = $(this).siblings(".error-input");
      if (value === "") {
        event.preventDefault();
        errorDiv.text("please enter your phone!");
      } else {
        errorDiv.text("");
      }
    }
  });
});
/*
const aceonephone = document.querySelectorAll(".aceonephone");

aceonephone.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    aceonephone.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";

    listDivion.style.display = "block";
  });
  console.log(aceonephone);
});
contentmore.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    contentmore.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";
  });
  console.log(contentmore);
});

aceonephone.forEach((item) => {
  item.addEventListener("click", () => {
    listDivion.innerHTML = `
      <div class="content">
        <p class="content-write">Your phone number</p>
        <input class="content-input" type="number" placeholder="03942346934"/>
        <div class="error-input input-error"></div>
      </div>
    `;
    const inputs = document.querySelectorAll(".content-input");
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const errorDiv = input.parentElement.querySelector(".error-input");
          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your phone!";
          } else {
            errorDiv.textContent = "";
          }
        }
      });
    });
  });
  console.log(aceonephone);
});
*/
/*location*/

const locationcontent = $(".locationcontent");
locationcontent.click(function (e) {
  const isVisible = listDivion.is(":visible");
  locationcontent.find(".onemore-iconmomen").html("&#8743;");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
contentmore.click(function (e) {
  const isVisible = listDivion.css("display", "block");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
locationcontent.click(function () {
  listDivion.html(`
<div class="content">
     <div class="section-luffy">
       <p class="sectionluffy-write">information
       How to get latitude & longitude of a location from Google Maps?</p>
     </div>
     <div class="section-more">
      <div class="sectionnis-one">
       <p class="sectionnis-write"> Latitude</p>
       <input class="content-classfontinput classfontinput" type="text" placeholder="enter your subject"/>
        <div class="error-input inputcontentnersion"></div>
      </div>
      <div class="sectionnis-one">
       <p class="sectionnis-write">
Longitude</p>
       <input class="content-classfontinput classfontinput" type="text" placeholder="enter your subject"/>
        <div class="error-input inputcontentnersion"></div>
      </div>
     </div>
     <div class="section-moretime">
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m2!2m1!1zYmFuaMO0IGNow6FuaCB0aMOqIHRo4bqldCBnaWFwIHRyw6pu!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
     </iframe>
     </div>
    </div>
`);
  $(".classfontinput").keydown(function (event) {
    if (event.key === "Enter") {
      const value = $(this).val().trim();
      const errorDiv = $(this).siblings(".inputcontentnersion");
      if (value === "") {
        event.preventDefault();
        errorDiv.text("please enter your!");
      } else {
        errorDiv.text("");
      }
    }
  });
});

/*
const locationcontent = document.querySelectorAll(".locationcontent");
locationcontent.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    locationcontent.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";

    listDivion.style.display = "block";
  });
  console.log(locationcontent);
});
contentmore.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    contentmore.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";
  });
  console.log(contentmore);
});
locationcontent.forEach((item) => {
  item.addEventListener("click", () => {
    listDivion.innerHTML = `
    <div class="content">
     <div class="section-luffy">
       <p class="sectionluffy-write">information
       How to get latitude & longitude of a location from Google Maps?</p>
     </div>
     <div class="section-more">
      <div class="sectionnis-one">
       <p class="sectionnis-write"> Latitude</p>
       <input class="content-classfontinput classfontinput" type="text" placeholder="enter your subject"/>
        <div class="error-input inputcontentnersion"></div>
      </div>
      <div class="sectionnis-one">
       <p class="sectionnis-write">
Longitude</p>
       <input class="content-classfontinput classfontinput" type="text" placeholder="enter your subject"/>
        <div class="error-input inputcontentnersion"></div>
      </div>
     </div>
     <div class="section-moretime">
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m2!2m1!1zYmFuaMO0IGNow6FuaCB0aMOqIHRo4bqldCBnaWFwIHRyw6pu!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
     </iframe>
     </div>
    </div>

    `;
    const inputs = document.querySelectorAll(".classfontinput");
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const inputcontentnersion = input.parentElement.querySelector(
            ".inputcontentnersion"
          );
          if (value === "") {
            event.preventDefault();
            inputcontentnersion.textContent = "plaese your enter!";
          } else {
            inputcontentnersion.textContent = "";
          }
        }
      });
      console.log(inputs);
    });
  });
  console.log(locationcontent);
});
*/
/* wifi */

const aceoneWifi = $(".aceoneWifi");
aceoneWifi.click(function (e) {
  const isVisible = listDivion.is(":visible");
  aceoneWifi.find(".onemore-iconmomen").html("&#8743;");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
contentmore.click(function (e) {
  const isVisible = listDivion.css("display", "block");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
aceoneWifi.click(function () {
  listDivion.html(`
 <div class="contention">
      <div class="content-nice">
        <p class="content-write">Wireless SSID</p>
        <input class="content-input oversuper" type="text" placeholder="Enter your wireless SSID"/>
        <div class="error-input input-error"></div>
      </div>
      <div class="content-nice">
        <p class="content-write">Password</p>
        <input class="content-input sivertines" type="text" placeholder="Enter your password"/>
        <div class="error-luffyconsection"></div>
      </div>
      <div class="content-nice">
        <p class="content-writesection">Encryption</p>
        <input class="content-inputsection" type="text" placeholder="WPA"/>
        <div class="producttion">
          <p class="production-section">       WPA</p>
          <p class="production-section">       WPA2</p>
        </div>
      </div>
</div>
`);
  const $ssidInput = $(".oversuper");
  const $passwordInput = $(".sivertines");

  $ssidInput.on("keydown", function (event) {
    if (event.key === "Enter") {
      const value = $(this).val().trim();
      const $errorDiv = $(this).parent().find(".error-input");

      if (value === "") {
        event.preventDefault();
        $errorDiv.text("Please enter your SSID!");
      } else {
        $errorDiv.text("");
      }
    }
    console.log($ssidInput);
  });
  $passwordInput.on("keydown", function (event) {
    if (event.key === "Enter") {
      const value = $(this).val().trim();
      const $errorDiv = $(this).parent().find(".error-luffyconsection");

      if (value === "") {
        event.preventDefault();
        $errorDiv.text("Please enter your password!");
      } else {
        $errorDiv.text("");
      }
    }
  });
  const $input = $(".content-inputsection");
  const $options = $(".producttion");
  const $optionItems = $(".producttion p");
  $input.on("click", function () {
    $options.show();
  });
  $optionItems.on("click", function () {
    $input.val($(this).text().trim());
    $options.hide();
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".content-inputsection, .producttion").length) {
      $options.hide();
    }
  });
  const $productionSections = $(".production-section");
  $productionSections.on("click", function () {
    $productionSections.removeClass("active");
    $(this).addClass("active");
  });
});

/*
const aceoneWifi = document.querySelectorAll(".aceoneWifi");
aceoneWifi.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    aceoneWifi.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";

    listDivion.style.display = "block";
  });
  console.log(aceoneWifi);
});
contentmore.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    contentmore.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";
  });
  console.log(contentmore);
});
aceoneWifi.forEach((item) => {
  item.addEventListener("click", () => {
    listDivion.innerHTML = `
      <div class="contention">
      <div class="content-nice">
        <p class="content-write">Wireless SSID</p>
        <input class="content-input oversuper" type="text" placeholder="Enter your wireless SSID"/>
        <div class="error-input input-error"></div>
      </div>
      <div class="content-nice">
        <p class="content-write">Password</p>
        <input class="content-input sivertines" type="text" placeholder="Enter your password"/>
        <div class="error-luffyconsection"></div>
      </div>
      <div class="content-nice">
        <p class="content-writesection">Encryption</p>
        <input class="content-inputsection" type="text" placeholder="WPA"/>
        <div class="producttion">
          <p class="production-section">       WPA</p>
          <p class="production-section">       WPA2</p>
        </div>
      </div>
      </div>
    `;
    const ssidInput = document.querySelector(".oversuper");
    const passwordInput = document.querySelector(".sivertines");
    if (ssidInput) {
      ssidInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = ssidInput.value.trim();
          const errorDiv =
            ssidInput.parentElement.querySelector(".error-input");
          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your SSID!";
          } else {
            errorDiv.textContent = "";
          }
        }
        console.log(ssidInput);
      });
    }
    if (passwordInput) {
      passwordInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = passwordInput.value.trim();
          const errorDiv = passwordInput.parentElement.querySelector(
            ".error-luffyconsection"
          );
          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your password!";
          } else {
            errorDiv.textContent = "";
          }
        }
      });
    }
    const input = document.querySelector(".content-inputsection");
    const options = document.querySelector(".producttion");
    const optionItems = document.querySelectorAll(".producttion p");
    input.addEventListener("click", function (e) {
      options.style.display = "block";
    });
    optionItems.forEach((item) => {
      item.addEventListener("click", function () {
        input.value = item.textContent.trim();
        options.style.display = "none";
      });
    });
    document.addEventListener("click", function (e) {
      if (!input.contains(e.target) && !options.contains(e.target)) {
        options.style.display = "none";
      }
    });
    const productionSections = document.querySelectorAll(".production-section");
    productionSections.forEach((item) => {
      item.addEventListener("click", function () {
        productionSections.forEach((el) => el.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });
});
*/
/* vcard*/

const aceoneVcard = $(".aceoneVcard");
aceoneVcard.click(function (e) {
  const isVisible = listDivion.is(":visible");
  aceoneVcard.find(".onemore-iconmomen").html("&#8743;");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
contentmore.click(function (e) {
  const isVisible = listDivion.css("display", "block");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
aceoneVcard.click(function () {
  listDivion.html(`
<div class="contention">
      <div class="content-nice">
        <p class="content-write">First name</p>
        <input class="content-input inputertion sectioncontent" type="text" placeholder=""/>
        <div class="error-input input-error"></div>
        <p class="content-write">Email</p>
        <input class="content-input inputertion sectionlist" type="text" placeholder=""/>
        <div class="input-errorsion"></div>
        <p class="content-britenter">Fax</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Your job</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Street</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Zip</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Country</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
      </div>
      <div class="content-nice">
        <p class="content-write">Last name</p>
        <input class="content-input inputertion sectioncontent" type="text" placeholder=""/>
        <div class="error-input input-error"></div>
         <p class="content-write">Phone</p>
        <input class="content-input inputertion sectionlistion" type="text" placeholder=""/>
        <div class="input-errorsion"></div>
         <p class="content-britenter">Birthday</p>
        <input class="content-input inputertion" type="date" placeholder=""/>
         <p class="content-britenter">Company</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">City</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">State</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">Wedsite</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
      </div>
      </div>
`);
  const inputs = $(".sectioncontent,.sectionlist,.sectionlistion");
  const aceImg = $(".ace-images");
  const colorRadio = $("#gradientColorRadio");
  const imageCheckbox = $("#customEyeCheckbox");
  if (inputs.length === 0) return;
  inputs.keydown(function (event) {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const value = $(this).val().trim();
    const errorDiv = $(this).siblings(".error-input");
    const errorSection = $(this).siblings(".input-errorsion");
    const isEmailField = $(this).attr("id") === "sectionlist";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      $(this).val().trim()
    );

    if (!value) {
      errorDiv.text("please enter your");
      errorSection.text("Please enter your!");
      aceImg.attr("src", "qrselector/img/qr to.png");
    }
    if (isEmailField && !isEmailValid) {
      if (errorDiv.length) errorDiv.text("Please enter a valid email!");
      if (errorSection.length) errorSection.text("Please enter a valid email!");
      if (aceImg.length) aceImg.attr("src", "qrselector/img/qr to.png");
      return;
    }

    if (errorDiv.length) errorDiv.text("");
    if (errorSection.length) errorSection.text("");

    if (aceImg.length) {
      const isColorChecked = colorRadio.prop("checked");
      const isImageChecked = imageCheckbox.prop("checked");

      if (isColorChecked && isImageChecked) {
        aceImg.attr("src", "qrselector/img/cardcheck2.png");
      } else if (isColorChecked) {
        aceImg.attr("src", "qrselector/img/cardcheck1.png");
      } else if (isImageChecked) {
        aceImg.attr("src", "qrselector/img/cardcheck3.png");
      } else {
        aceImg.attr("src", "qrselector/img/qrVcard.png");
      }
    }
  });
});

/*
const aceoneVcard = document.querySelectorAll(".aceoneVcard");
aceoneVcard.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    aceoneVcard.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";

    listDivion.style.display = "block";
  });
});
contentmore.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    contentmore.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";
  });
});
aceoneVcard.forEach((item) => {
  item.addEventListener("click", () => {
    listDivion.innerHTML = `
      <div class="contention">
      <div class="content-nice">
        <p class="content-write">First name</p>
        <input class="content-input inputertion sectioncontent" type="text" placeholder=""/>
        <div class="error-input input-error"></div>
        <p class="content-write">Email</p>
        <input class="content-input inputertion sectionlist" type="text" placeholder=""/>
        <div class="input-errorsion"></div>
        <p class="content-britenter">Fax</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Your job</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Street</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Zip</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Country</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
      </div>
      <div class="content-nice">
        <p class="content-write">Last name</p>
        <input class="content-input inputertion sectioncontent" type="text" placeholder=""/>
        <div class="error-input input-error"></div>
         <p class="content-write">Phone</p>
        <input class="content-input inputertion sectionlistion" type="text" placeholder=""/>
        <div class="input-errorsion"></div>
         <p class="content-britenter">Birthday</p>
        <input class="content-input inputertion" type="date" placeholder=""/>
         <p class="content-britenter">Company</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">City</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">State</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">Wedsite</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
      </div>
      </div>
    `;
    const inputs = document.querySelectorAll(
      ".sectioncontent, .sectionlist,.sectionlistion"
    );
    const aceImg = document.querySelector(".ace-images");
    const colorRadio = document.getElementById("gradientColorRadio");
    const imageCheckbox = document.getElementById("customEyeCheckbox");

    if (!inputs) return;

    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key !== "Enter") return;

        event.preventDefault();

        const value = input.value.trim();
        const errorDiv = input.parentElement.querySelector(".error-input");
        const errorSection =
          input.parentElement.querySelector(".input-errorsion");

        const isEmailField = input.id === "sectionlist";
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        if (!value) {
          if (errorDiv) errorDiv.textContent = "Please enter your!";
          if (errorSection) errorSection.textContent = "Please enter your!";
          if (aceImg) aceImg.src = "qrselector/img/qrto.png";
          return;
        }

        if (isEmailField && !isEmailValid) {
          if (errorDiv) errorDiv.textContent = "Please enter a valid email!";
          if (errorSection)
            errorSection.textContent = "Please enter a valid email!";
          if (aceImg) aceImg.src = "qrselector/img/qrto.png";
          return;
        }

        if (errorDiv) errorDiv.textContent = "";
        if (errorSection) errorSection.textContent = "";

        if (aceImg) {
          if (colorRadio?.checked && imageCheckbox?.checked) {
            aceImg.src = "qrselector/img/cardcheck2.png";
          } else if (colorRadio?.checked) {
            aceImg.src = "qrselector/img/cardcheck1.png";
          } else if (imageCheckbox?.checked) {
            aceImg.src = "qrselector/img/cardcheck3.png";
          } else {
            aceImg.src = "qrselector/img/qrVcard.png";
          }
        }
      });
    });
  });
});
*/
/* aceoneggreview*/

const aceoneggreview = $(".aceoneggreview");
aceoneggreview.click(function (e) {
  const isVisible = listDivion.is(":visible");
  aceoneggreview.find(".onemore-iconmomen").html("&#8743;");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
contentmore.click(function (e) {
  const isVisible = listDivion.css("display", "block");
  const icon = $(this).find(".onemore-iconmomen");
  icon.html(isVisible ? "&#8744;" : "&#8743;");
  listDivion.css("display", "block");
  e.stopPropagation();
});
aceoneggreview.click(function () {
  listDivion.html(`
<div class="content">
        <p class="content-write">Enter content </p>
        <input class="content-input" type="text" placeholder="Enter your google my business review link"/>
        <div class="error-input input-error"></div>
</div>
`);
  const inputs = $(".content-input");
  const aceImg = $(".ace-images");
  const colorRadio = $("#gradientColorRadio");
  const imageCheckbox = $("#customEyeCheckbox");
  if (!inputs.length) return;
  inputs.keydown(function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = $(this).val().trim();
      const errorDiv = $(this).siblings(".error-input");
      if (!value) {
        errorDiv.text("Please enter your google review!");
        aceImg.attr("src", "img.qr to.png");
      } else {
        errorDiv.text("");

        if (aceImg.length) {
          if (colorRadio.prop("checked") && imageCheckbox.prop("checked")) {
            aceImg.attr("src", "qrselector/img/urlchec2.png");
          } else if (colorRadio.prop("checked")) {
            aceImg.attr("src", "qrselector/img/urlchec1.png");
          } else if (imageCheckbox.prop("checked")) {
            aceImg.attr("src", "qrselector/img/urlchec3.png");
          } else {
            aceImg.attr("src", "qrselector/img/qr to đen.png ");
          }
        }
      }
    }
  });
});

/*
const aceoneggreview = document.querySelectorAll(".aceoneggreview");
aceoneggreview.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    aceoneggreview.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";

    listDivion.style.display = "block";
  });
});
contentmore.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const isVisible = listDivion.style.display === "block";
    contentmore.forEach((el) => {
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = isVisible ? "&#8744;" : "&#8743;";
  });
});
aceoneggreview.forEach((item) => {
  item.addEventListener("click", () => {
    listDivion.innerHTML = `
      <div class="content">
        <p class="content-write">Enter content </p>
        <input class="content-input" type="text" placeholder="Enter your google my business review link"/>
        <div class="error-input input-error"></div>
      </div>
    `;
    const inputs = document.querySelector(".content-input");
    const aceImg = document.querySelector(".ace-images");
    const colorRadio = document.getElementById("gradientColorRadio");
    const imageCheckbox = document.getElementById("customEyeCheckbox");

    if (!inputs) return;

    inputs.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const value = inputs.value.trim();
        const errorDiv = inputs.parentElement.querySelector(".error-input");

        if (!value) {
          if (errorDiv)
            errorDiv.textContent = "Please enter your google review!";
          if (aceImg) aceImg.src = "qrselector/img/qrto.png";
        } else {
          if (errorDiv) errorDiv.textContent = "";

          if (aceImg) {
            if (
              colorRadio &&
              colorRadio.checked &&
              imageCheckbox &&
              imageCheckbox.checked
            ) {
              aceImg.src = "qrselector/img/urlchec2.png";
            } else if (colorRadio && colorRadio.checked) {
              aceImg.src = "qrselector/img/urlcheck1.png";
            } else if (imageCheckbox && imageCheckbox.checked) {
              aceImg.src = "qrselector/img/urlchec3.png";
            } else {
              aceImg.src = "qrselector/img/qr to đen.png";
            }
          }
        }
      }
    });
  });
});
*/
$(document).ready(function () {
  $(".sabothammuu").each(function () {
    const text = $(this).find(".contentner-write").text().trim();
    if (text === "URL") {
      $(this).addClass("active");
    }
  });
});

$(".contentner-write").on("click", function () {
  $(".sabothammuu").removeClass("active");
  $(this).addClass("active");
});
/*
const contentItems = document.querySelectorAll(".contentner-write");

contentItems.forEach((item) => {
  item.addEventListener("click", function () {
    contentItems.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
*/

const contentItems = $(".contentner-write");

contentItems.on("click", function () {
  contentItems.removeClass("active");
  $(this).addClass("active");
});
/*
const contertion = document.getElementById("conternierOne");
const contentierList = document.getElementById("contentierList");

contertion.addEventListener("click", function (e) {
  const icon = contertion.querySelector(".onemore-iconmomen");

  const isVisible = contentierList.style.display === "block";
  contentierList.style.display = isVisible ? "none" : "block";

  if (icon) {
    icon.textContent = isVisible ? "∨" : "∧";
  }

  e.stopPropagation();
});
*/

const contertion = $("#conternierOne");
const contentierList = $("#contentierList");

contertion.on("click", function (e) {
  const icon = contertion.find(".onemore-iconmomen");
  const isVisible = contentierList.is(":visible");

  contentierList.toggle();
  icon.text(isVisible ? "∨" : "∧");

  e.stopPropagation();
});
/*
const toggleBox = document.getElementById("toggleColorBox");
const colorOptions = document.getElementById("colorOptions");

toggleBox.addEventListener("click", function (e) {
  const icon = toggleBox.querySelector(".onemore-iconmomen");

  const isVisible = colorOptions.style.display === "block";
  colorOptions.style.display = isVisible ? "none" : "block";

  if (icon) {
    icon.textContent = isVisible ? "∨" : "∧";
  }

  e.stopPropagation();
});
*/

const toggleBox = $("#toggleColorBox");
const colorOptions = $("#colorOptions");

toggleBox.on("click", function (e) {
  const icon = toggleBox.find(".onemore-iconmomen");
  const isVisible = colorOptions.is(":visible");

  colorOptions.toggle();
  icon.text(isVisible ? "∨" : "∧");

  e.stopPropagation();
});
/*
const onemoretitle = document.getElementById("onemoretitle");
const colortitle = document.getElementById("colortitle");

onemoretitle.addEventListener("click", function (e) {
  const icon = onemoretitle.querySelector(".onemore-iconmomen");

  const isVisible = colortitle.style.display === "block";
  colortitle.style.display = isVisible ? "none" : "block";

  if (icon) {
    icon.textContent = isVisible ? "∨" : "∧";
  }

  e.stopPropagation();
});
*/

const onemoretitle = $("#onemoretitle");
const colortitle = $("#colortitle");

onemoretitle.on("click", function (e) {
  const icon = onemoretitle.find(".onemore-iconmomen");
  const isVisible = colortitle.is(":visible");

  colortitle.toggle();
  icon.text(isVisible ? "∨" : "∧");

  e.stopPropagation();
});
/*
const designcolor = document.getElementById("designcolor");
const designContent = document.getElementById("designContent");

designcolor.addEventListener("click", function (e) {
  const icon = designcolor.querySelector(".onemore-iconmomen");

  const isVisible = designContent.style.display === "block";
  designContent.style.display = isVisible ? "none" : "block";

  if (icon) {
    icon.textContent = isVisible ? "∨" : "∧";
  }

  e.stopPropagation();
});
*/

const designcolor = $("#designcolor");
const designContent = $("#designContent");

designcolor.on("click", function (e) {
  const icon = designcolor.find(".onemore-iconmomen");
  const isVisible = designContent.is(":visible");

  designContent.toggle();
  icon.text(isVisible ? "∨" : "∧");

  e.stopPropagation();
});

const iconlogoImage = $(".iconlogo-image");

iconlogoImage.click(function () {
  iconlogoImage.removeClass("active");
  $(this).addClass("active");
});

const logonenimage = $(".logonen-image");
logonenimage.click(function () {
  logonenimage.removeClass("active");
  $(this).addClass("active");
});

const logonension = $(".logonen-imagesion");
if (!$(".logonen-imagesion.active").length) {
  $(".logonen-imagesion").first().addClass("active");
}
logonension.click(function () {
  logonension.removeClass("active");
  $(this).addClass("active");
});

/*zoom ảnh QR code */

const aceimages = $(".contentier-hooover");
const overlaydis = $("#overlaydis");
const overlaydiver = $("#overlaydiver");

aceimages.click(function () {
  const parent = $(this).closest(".contentier-ace");
  if (parent.length) {
    const qrImg = parent.find(".ace-images");
    if (qrImg.length) {
      overlaydiver.attr("src", qrImg.attr("src"));
      overlaydis.css("display", "flex");
    }
  }
});

const overlay = $("#overlaydis");
const overlayClickArea = $(".overlaition");
const overlayoutra = $(".overlayoutra");

overlayClickArea.click(function () {
  overlay.css("display", "none");
});
overlayoutra.click(function () {
  overlay.css("display", "none");
});

/* khi ấn nut reset ảnh */
/*
const saboWrite = document.querySelectorAll(".sabo-write");

saboWrite.forEach(function (element) {
  element.addEventListener("click", function () {
    const aceImg = document.querySelector(".ace-images");
    if (aceImg) aceImg.src = "qrselector/img/qrto.png";
  });
});
*/

const saboWrite = $(".sabo-write");
saboWrite.click(function () {
  const aceImg = $(".ace-images");
  aceImg.attr("src", "qrselector/img/qr to.png");
});

/* Frequently Asked Questions */
const contentBlocks = $(".contentonesection-write");

contentBlocks.each(function () {
  const section = $(this);
  const answer = section.find(".productsectioner");
  const question = section.find(".contentonesection-butru");
  const icon = section.find(".contentonesection-icon");

  if (answer.length) {
    answer.hide();
    if (icon.length) icon.html("&#62;");
  }

  if (question.length && answer.length) {
    question.on("click", function (e) {
      const isVisible = answer.is(":visible");
      answer.toggle();
      if (icon.length) {
        icon.html(isVisible ? "&#62;" : "&#8744;");
      }
      e.stopPropagation();
    });
  }
});

const groups = document.querySelectorAll(".image-group");
let current = 0;

setInterval(() => {
  const currentGroup = groups[current];
  const next = (current + 1) % groups.length;
  const nextGroup = groups[next];

  currentGroup.classList.remove("active");
  currentGroup.classList.add("out");

  nextGroup.classList.remove("out");
  setTimeout(() => {
    nextGroup.classList.add("active");
  }, 100);

  current = next;
}, 8000);

const fontwirtecontainer = $(".fontwirte-container");

fontwirtecontainer.each(function () {
  const section = $(this);
  const answer = section.find(".prudoctionner");
  const question = section.find(".fine-dorgot");
  const icon = section.find(".fontwirte-iconness");

  if (answer.length) {
    answer.hide();
    if (icon.length) icon.html("&#62;");
  }

  if (question.length && answer.length) {
    question.on("click", function (e) {
      fontwirtecontainer.each(function () {
        const other = $(this);
        if (!other.is(section)) {
          other.find(".prudoctionner").hide();
          other.find(".fontwirte-iconness").html("&#62;");
          other.removeClass("active");
        }
      });

      const isVisible = answer.is(":visible");
      if (!isVisible) {
        answer.show();
        icon.html("&#8744;");
        section.addClass("active");
      }

      e.stopPropagation();
    });
  }
});

console.log($(".fontwirte-container"));

/*
const fontwirtecontainer = document.querySelectorAll(".fontwirte-container");
fontwirtecontainer.forEach(function (section) {
  var answer = section.querySelector(".prudoctionner");
  var question = section.querySelector(".fine-dorgot");
  var icon = section.querySelector(".fontwirte-iconness");
  if (answer) {
    answer.style.display = "none";
    if (icon) icon.innerHTML = "&#62;";
  }
  if (question && answer) {
    question.addEventListener("click", function (e) {
      fontwirtecontainer.forEach(function (otherSection) {
        if (otherSection !== section) {
          var otherAnswer = otherSection.querySelector(".prudoctionner");
          var otherIcon = otherSection.querySelector(".fontwirte-iconness");
          if (otherAnswer) otherAnswer.style.display = "none";
          if (otherIcon) otherIcon.innerHTML = "&#62;";
          otherSection.classList.remove("active");
        }
      });
      if (answer.style.display !== "block") {
        answer.style.display = "block";
        if (icon) icon.innerHTML = "&#8744;";
        section.classList.add("active");
      }
      e.stopPropagation();
    });
  }
  console.log(fontwirtecontainer);
});
*/

const imangecontent = $("#imange-content");
const business = $(".fine-dorgot");

business.on("click", function (e) {
  imangecontent.css("display", "block");
  e.stopPropagation();
  imangecontent.html(`
     <div class="contentnis" >
          <div class="imgsection-listimg">
            <img src="/qrselector/img/end-1.png" />
            <p class="listimg-content">Online shopping</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/qrselector/img/end-2.png" />
            <p class="listimg-content">Online ordering</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/qrselector/img/end-3.png" />
            <p class="listimg-content">Accessing product info</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/qrselector/img/end-4.png" />
            <p class="listimg-content">Connecting social media</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/qrselector/img/end-5.png" />
            <p class="listimg-content">Doing payment</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/qrselector/img/end-6.png" />
            <p class="listimg-content">Connecting WiFi</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/qrselector/img/end-7.png" />
            <p class="listimg-content">Sharing feedback</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/qrselector/img/end-8.png" />
            <p class="listimg-content">Downloading the app</p>
          </div>
        </div>
  `);
  console.log(business);
});

const margketting = $(".margketting");

margketting.on("click", function (e) {
  imangecontent.css("display", "block");
  e.stopPropagation();
  imangecontent.html(`
    <div class="contentnis">
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/qrselector/img/marketting-1.png" />
      <img src="/qrselector/img/marketting-.png" />
    </div>
    <div class="listimg-content">Promoting sales, events on Posters</div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img  src="/qrselector/img/markettin-3.png" />
      <img src="/qrselector/img/marketting-4.png" />
    </div>
    <div class="listimg-content">
      Promoting products, services on Flyers, Brochures
    </div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/qrselector/img/marketing-5.png" />
      <img src="/qrselector/img/markrtting06.png" />
    </div>
    <div class="listimg-content">Promoting services on Sandwich boards</div>
   < /div>
 </div>

    `);
  console.log(margketting);
});

const Freelancer = $(".Freelancer");

Freelancer.on("click", function (e) {
  imangecontent.css("display", "block");
  e.stopPropagation();
  imangecontent.html(`
    <div class="contentnis">
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/qrselector/img/freelan-1.png" />
      <img src="/qrselector/img/freelan-2.png" />
    </div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img class="first-imaeges" src="/qrselector/img/freelan-3.png" />
    </div>
    <div class="listimg-content">
      Promoting products, services on Flyers, Brochures
    </div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/qrselector/img/freelan-4.png" />
      <img src="/qrselector/img/freelan-5.png" />
    </div>
    <div class="listimg-content">Promoting services on Sandwich boards</div>
  </div>
 </div>
    `);
  console.log(Freelancer);
});
/*
const swapIcon = document.querySelectorAll(".swap-icon");
swapIcon.forEach(function (item) {
  item.addEventListener("click", function () {
    boaDowload.forEach(function (item) {
      item.classList.add("active");
    });
    const gradiention = document.getElementById("gradiention");
    const aceImg = document.querySelector(".ace-images");
    const colorRadio = document.getElementById("gradientColorRadio");
    const imageCheckbox = document.getElementById("customEyeCheckbox");
    if (!aceImg) return;
    if (imageCheckbox && imageCheckbox.checked) {
      const currentSrc = aceImg.getAttribute("src");
      if (currentSrc.includes("3mauso02.png")) {
        aceImg.setAttribute("src", "qrselector/img/3mauso01.png");
      } else {
        aceImg.setAttribute("src", "qrselector/img/3mauso02.png");
      }
    } else if (colorRadio && colorRadio.checked) {
      const currentSrc = aceImg.getAttribute("src");
      if (currentSrc.includes("prsection1.png")) {
        aceImg.setAttribute("src", "qrselector/img/prsection2.png");
      } else {
        aceImg.setAttribute("src", "qrselector/img/prsection1.png");
      }
    } else if (gradiention === "Linear gradient") {
      aceImg.src = "qrselector/img/b01.png";
    }
    const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");
    const text1 = document.getElementById("colorText1");
    const text2 = document.getElementById("colorText2");

    const tempColor = color1.value;
    const tempText = text1.value;

    color1.value = color2.value;
    color2.value = tempColor;

    text1.value = text2.value;
    text2.value = tempText;
  });
});
*/

const swapIcon = $(".swap-icon");
swapIcon.click(function () {
  $(".boa-Dowload").addClass("active");
  const gradiention = $("#gradiention");
  const aceImg = $(".ace-images");
  const colorRadio = $("#gradientColorRadio");
  const imageCheckbox = $("#customEyeCheckbox");
  if (!aceImg) return;
  if (imageCheckbox.prop("checked")) {
    const currentSrc = aceImg.attr("src");
    if (currentSrc.includes("3mauso02.png")) {
      aceImg.attr("src", "/qrselector/img/3mauso01.png");
    } else {
      aceImg.attr("src", "/qrselector/img/3mauso02.png");
    }
  } else if (colorRadio.prop("checked")) {
    const currentSrc = aceImg.attr("src");
    if (currentSrc.includes("prsection1.png")) {
      aceImg.attr("src", "/qrselector/img/prsection2.png");
    } else {
      aceImg.attr("src", "/qrselector/img/prsection1.png");
    }
  } else if (gradiention === "Linear gradient") {
    aceImg.attr("src", "/qrselector/img/b01.png");
  }
  const color1 = $("#color1");
  const color2 = $("#color2");
  const text1 = $("#colorText1");
  const text2 = $("#colorText2");
  const tempColor = color1.val();
  const tempText = text1.val();

  color1.val(color2.val());
  color2.val(tempColor);

  text1.val(text2.val());
  text2.val(tempText);
});
console.log(swapIcon);
/*
const singleColorRadio = document.getElementById("singleColorRadio");
const gradientColorRadio = document.getElementById("gradientColorRadio");
const gradientControls = document.getElementById("gradientControls");
const customEyeCheckbox = document.getElementById("customEyeCheckbox");
const eyeColorSection = document.getElementById("eyeColorSection");

if (singleColorRadio) singleColorRadio.checked = true;
if (gradientColorRadio) gradientColorRadio.checked = false;
if (customEyeCheckbox) customEyeCheckbox.checked = false;
if (gradientControls) gradientControls.classList.add("hidden");
if (eyeColorSection) eyeColorSection.classList.add("hidden");

if (singleColorRadio) {
  singleColorRadio.addEventListener("click", () => {
    if (gradientControls) gradientControls.classList.add("hidden");
    if (customEyeCheckbox && !customEyeCheckbox.checked && eyeColorSection) {
      eyeColorSection.classList.add("hidden");
    }
    console.log(singleColorRadio);
  });
}

if (gradientColorRadio) {
  gradientColorRadio.addEventListener("click", () => {
    if (gradientControls) gradientControls.classList.remove("hidden");
    if (customEyeCheckbox && !customEyeCheckbox.checked && eyeColorSection) {
      eyeColorSection.classList.add("hidden");
    }
    console.log(gradientColorRadio);
  });
}

if (customEyeCheckbox) {
  customEyeCheckbox.addEventListener("change", (e) => {
    if (eyeColorSection) {
      if (e.target.checked) {
        eyeColorSection.classList.remove("hidden");
      } else {
        eyeColorSection.classList.add("hidden");
      }
    }
    console.log(customEyeCheckbox);
  });
}
*/
$(document).ready(function () {
  const singleColorRadio = $("#singleColorRadio");
  const gradientColorRadio = $("#gradientColorRadio");
  const gradientControls = $("#gradientControls");
  const customEyeCheckbox = $("#customEyeCheckbox");
  const eyeColorSection = $("#eyeColorSection");

  singleColorRadio.prop("checked", true);
  gradientColorRadio.prop("checked", false);
  customEyeCheckbox.prop("checked", false);
  gradientControls.addClass("hidden");
  eyeColorSection.addClass("hidden");

  singleColorRadio.on("click", function () {
    gradientControls.addClass("hidden");

    if (!customEyeCheckbox.is(":checked")) {
      eyeColorSection.addClass("hidden");
    }

    console.log(this);
  });

  gradientColorRadio.on("click", function () {
    gradientControls.removeClass("hidden");

    if (!customEyeCheckbox.is(":checked")) {
      eyeColorSection.addClass("hidden");
    }

    console.log(this);
  });

  customEyeCheckbox.on("change", function () {
    if ($(this).is(":checked")) {
      eyeColorSection.removeClass("hidden");
    } else {
      eyeColorSection.addClass("hidden");
    }

    console.log(this);
  });
});
/*
const selected = document.getElementById("selectedOption");
const options = document.getElementById("optionsList");
const dropdown = document.getElementById("gradientDropdown");

selected.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});
options.addEventListener("click", (e) => {
  if (e.target.dataset.value) {
    selected.textContent = e.target.dataset.value;

    options
      .querySelectorAll("div")
      .forEach((opt) => opt.classList.remove("active"));
    e.target.classList.add("active");

    options.style.display = "none";
  }
  console.log(options);
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    options.style.display = "none";
  }
});
*/

$(document).ready(function () {
  const selected = $("#selectedOption");
  const options = $("#optionsList");
  const dropdown = $("#gradientDropdown");

  selected.on("click", function () {
    options.toggle();
  });

  options.on("click", "div", function () {
    const value = $(this).data("value");
    if (value) {
      selected.text(value);

      options.find("div").removeClass("active");
      $(this).addClass("active");

      options.hide();
    }

    console.log(options);
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(dropdown).length) {
      options.hide();
    }
  });
});
/*
const downloadButtons = document.querySelectorAll(".onetimePng");
downloadButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const img = document.querySelector(".ace-images");
    if (img && img.src) {
      const link = document.createElement("a");
      link.href = img.src;
      const extension = btn.innerText.trim().toLowerCase();
      link.download = `downloaded-image.${extension}`;

      document.body.appendChild(link);
      link.click();
      const message = document.getElementById("downloadMessage");
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    }
  });
});
*/
const downloadButtons = $(".onetimePng");
downloadButtons.click(function (e) {
  e.stopPropagation();
  const img = $(".ace-images");
  if (img.length && img.attr("src")) {
    const link = document.createElement("a");
    link.href = img.attr("src");

    const extension = $(this).text().trim().toLowerCase();
    link.download = `downloaded-image.${extension}`;
    document.body.appendChild(link);
    link.click();

    const message = $("#downloadMessage");
    message.show();
    setTimeout(() => {
      message.hide();
    }, 3000);
  }
});
/*
document
  .getElementById("openFileTrigger")
  .addEventListener("click", function () {
    document.getElementById("fileInput").click();
  });
*/

$("#openFileTrigger").on("click", function () {
  $("#fileInput").click();
});

const designimage1 = document.getElementById("designimage1");
const designimage2 = document.getElementById("designimage2");
const designimage3 = document.getElementById("designimage3");
const imagesion5 = document.getElementById("imagesion5");
const aceImg = document.querySelector(".ace-images");
const boaDowload = document.querySelectorAll(".boa-Dowload");
const imagesion4 = document.getElementById("imagesion4");
boaDowload.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("active")) {
      const downloadOptions = item.querySelector(".download-options");
      if (downloadOptions) {
        const isVisible = downloadOptions.style.display === "block";
        downloadOptions.style.display = isVisible ? "none" : "block";
      }
    }
  });
  const paragraphs = item.querySelectorAll(".download-options p");
  paragraphs.forEach(function (p) {
    p.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});

imagesion4.addEventListener("click", function () {
  boaDowload.forEach(function (item) {
    item.classList.add("active");
  });
  designimage1.addEventListener("click", function () {
    const colorRadio = document.getElementById("gradientColorRadio");
    const aceImg = document.querySelector(".ace-images");
    const imageCheckbox = document.getElementById("customEyeCheckbox");
    if (aceImg) {
      if (
        colorRadio &&
        colorRadio.checked &&
        imageCheckbox &&
        imageCheckbox.checked
      ) {
        aceImg.src = "qrselector/img/a01.png";
      } else if (colorRadio && colorRadio.checked) {
        aceImg.src = "qrselector/img/prsection2.png";
      } else if (imageCheckbox && imageCheckbox.checked) {
        aceImg.src = "qrselector/img/1a1.png";
      } else {
        aceImg.src = "qrselector/img/body1.png";
      }
    }
  });
  designimage2.addEventListener("click", function () {
    const colorRadio = document.getElementById("gradientColorRadio");
    const aceImg = document.querySelector(".ace-images");
    const imageCheckbox = document.getElementById("customEyeCheckbox");
    if (aceImg) {
      if (
        colorRadio &&
        colorRadio.checked &&
        imageCheckbox &&
        imageCheckbox.checked
      ) {
        aceImg.src = "qrselector/img/a02.png";
      } else if (imageCheckbox && imageCheckbox.checked) {
        aceImg.src = "qrselector/img/1a2.png";
      } else if (colorRadio && colorRadio.checked) {
        aceImg.src = "qrselector/img/greenbody2.png";
      } else {
        aceImg.src = "qrselector/img/body2.png";
      }
    }
  });
  designimage3.addEventListener("click", function () {
    const colorRadio = document.getElementById("gradientColorRadio");
    const aceImg = document.querySelector(".ace-images");
    const imageCheckbox = document.getElementById("customEyeCheckbox");
    if (aceImg) {
      if (
        colorRadio &&
        colorRadio.checked &&
        imageCheckbox &&
        imageCheckbox.checked
      ) {
        aceImg.src = "qrselector/img/a03.png";
      } else if (colorRadio && colorRadio.checked) {
        aceImg.src = "qrselector/img/greenbody3.png";
      } else if (imageCheckbox && imageCheckbox.checked) {
        aceImg.src = "qrselector/img/1a3.png";
      } else {
        aceImg.src = "qrselector/img/body3.png";
      }
    }
  });
});
imagesion5.addEventListener("click", function () {
  boaDowload.forEach(function (item) {
    item.classList.add("active");
  });
  designimage1.addEventListener("click", function () {
    const colorRadio = document.getElementById("gradientColorRadio");
    const aceImg = document.querySelector(".ace-images");
    const imageCheckbox = document.getElementById("customEyeCheckbox");

    if (aceImg) {
      if (
        colorRadio &&
        colorRadio.checked &&
        imageCheckbox &&
        imageCheckbox.checked
      ) {
        aceImg.src = "qrselector/img/b01.png";
      } else if (colorRadio && colorRadio.checked) {
        aceImg.src = "qrselector/img/greenbody4.png";
      } else if (imageCheckbox && imageCheckbox.checked) {
        aceImg.src = "qrselector/img/c01.png";
      } else {
        aceImg.src = "qrselector/img/body43.png";
      }
    }
  });
  designimage2.addEventListener("click", function () {
    const colorRadio = document.getElementById("gradientColorRadio");
    const aceImg = document.querySelector(".ace-images");
    const imageCheckbox = document.getElementById("customEyeCheckbox");

    if (aceImg) {
      if (
        colorRadio &&
        colorRadio.checked &&
        imageCheckbox &&
        imageCheckbox.checked
      ) {
        aceImg.src = "qrselector/img/b02.png";
      } else if (colorRadio && colorRadio.checked) {
        aceImg.src = "qrselector/img/greenbody5.png";
      } else if (imageCheckbox && imageCheckbox.checked) {
        aceImg.src = "qrselector/img/c02.png";
      } else {
        aceImg.src = "qrselector/img/body5.png";
      }
    }
  });
  designimage3.addEventListener("click", function () {
    const colorRadio = document.getElementById("gradientColorRadio");
    const aceImg = document.querySelector(".ace-images");
    const imageCheckbox = document.getElementById("customEyeCheckbox");

    if (aceImg) {
      if (
        colorRadio &&
        colorRadio.checked &&
        imageCheckbox &&
        imageCheckbox.checked
      ) {
        aceImg.src = "qrselector/img/b03.png";
      } else if (colorRadio && colorRadio.checked) {
        aceImg.src = "qrselector/img/greenbody6.png";
      } else if (imageCheckbox && imageCheckbox.checked) {
        aceImg.src = "qrselector/img/c03.png";
      } else {
        aceImg.src = "qrselector/img/body6.png";
      }
    }
  });
});

/*
const designimage1 = $("#designimage1");
const designimage2 = $("#designimage2");
const designimage3 = $("#designimage3");
const imagesion5 = $("#imagesion5");
const aceImg = $(".ace-images");
const boaDowload = $(".boa-Dowload");
const imagesion4 = $("imagesion4");

boaDowload.each(function () {
  $(this).click(function () {
    if ($(this).hasClass("active")) {
      const downloadOptions = $(this).find(".download-options");
      if (downloadOptions.length) {
        const isVisible = downloadOptions.css("display") === "block";
        downloadOptions.css("display", isVisible ? "none" : "block");
      }
    }
  });
  $(this)
    .find(".download-options p")
    .click(function (e) {
      e.stopPropagation();
    });
});

imagesion4.click(function () {
  boaDowload.addClass("active");
  designimage1.click(function () {
    const colorRadio = $("#gradientColorRadio");
    const aceImg = $(".ace-images");
    const imageCheckbox = $("#customEyeCheckbox");

    if (aceImg) {
      if (colorRadio?.checked && imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/a01.png";
      } else if (colorRadio?.checked) {
        aceImg.src = "qrselector/img/prsection2.png";
      } else if (imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/1a1.png";
      } else {
        aceImg.src = "qrselector/img/body1.png";
      }
    }
  });

  designimage2.click(function () {
    const colorRadio = $("#gradientColorRadio");
    const aceImg = $(".ace-images");
    const imageCheckbox = $("#customEyeCheckbox");

    if (aceImg) {
      if (colorRadio?.checked && imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/a02.png";
      } else if (colorRadio?.checked) {
        aceImg.src = "qrselector/img/greenbody2.png";
      } else if (imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/1a2.png";
      } else {
        aceImg.src = "qrselector/img/body2.png";
      }
    }
  });

  designimage3.click(function () {
    const colorRadio = $("#gradientColorRadio");
    const aceImg = $(".ace-images");
    const imageCheckbox = $("#customEyeCheckbox");

    if (aceImg) {
      if (colorRadio?.checked && imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/a03.png";
      } else if (colorRadio?.checked) {
        aceImg.src = "qrselector/img/greenbody3.png";
      } else if (imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/1a3.png";
      } else {
        aceImg.src = "qrselector/img/body3.png";
      }
    }
  });
});

imagesion5.click(function () {
  boaDowload.addClass("active");
  designimage1.click(function () {
    const colorRadio = $("#gradientColorRadio");
    const aceImg = $(".ace-images");
    const imageCheckbox = $("#customEyeCheckbox");

    if (aceImg) {
      if (colorRadio?.checked && imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/b01.png";
      } else if (colorRadio?.checked) {
        aceImg.src = "qrselector/img/greenbody4.png";
      } else if (imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/c01.png";
      } else {
        aceImg.src = "qrselector/img/body43.png";
      }
    }
  });

  designimage2.click(function () {
    const colorRadio = $("#gradientColorRadio");
    const aceImg = $(".ace-images");
    const imageCheckbox = $("#customEyeCheckbox");

    if (aceImg) {
      if (colorRadio?.checked && imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/b02.png";
      } else if (colorRadio?.checked) {
        aceImg.src = "qrselector/img/greenbody5.png";
      } else if (imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/c02.png";
      } else {
        aceImg.src = "qrselector/img/body5.png";
      }
    }
  });

  designimage3.click(function () {
    const colorRadio = $("#gradientColorRadio");
    const aceImg = $(".ace-images");
    const imageCheckbox = $("#customEyeCheckbox");

    if (aceImg) {
      if (colorRadio?.checked && imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/b03.png";
      } else if (colorRadio?.checked) {
        aceImg.src = "qrselector/img/greenbody6.png";
      } else if (imageCheckbox?.checked) {
        aceImg.src = "qrselector/img/c03.png";
      } else {
        aceImg.src = "qrselector/img/body6.png";
      }
    }
  });
});
*/
/* xoay trai phỉa lên xuống của ảnh */
/*
const overtripper = document.getElementById("overlaydiver");
const overdoimoiupdowwn = document.getElementById("overdoimoiupdowwn");
const overdoileftright = document.getElementById("overdoileftright");
const overdoixoayright = document.getElementById("overdoixoayright");
const overdoimoitanng = document.getElementById("overdoimoitanng");
const overdoimoigiam = document.getElementById("overdoimoigiam");

let flipper = false;

overdoimoiupdowwn.addEventListener("click", function () {
  flipper = !flipper;
  overtripper.style.transform = flipper ? "scaleY(-1)" : "scaleY(1)";
  overtripper.style.transition = "transform 0.3s ease";
});

overdoileftright.addEventListener("click", function () {
  flipper = !flipper;
  overtripper.style.transform = flipper ? "scaleX(-1)" : "scaleX(1)";
  overtripper.style.transition = "transform 0.3s ease";
});
let angle = 0;
overdoixoayright.addEventListener("click", function () {
  angle += 90;
  overtripper.style.transform = `rotate(${angle}deg)`;
  overtripper.style.transition = "transform 0.3s ease";
});
overdoixoaylefft.addEventListener("click", function () {
  angle -= 90;
  overtripper.style.transform = `rotate(${angle}deg)`;
  overtripper.style.transform = "transform o.3s ease";
});

let scale = 1;
overdoimoitanng.addEventListener("click", function () {
  scale += 0.2;
  overtripper.style.transform = `scale(${scale})`;
  overtripper.style.transition = "transform 0.3s ease";
});
overtripper.style.transform = `scale(${scale})`;
overdoimoigiam.addEventListener("click", function () {
  if (scale > 1) {
    scale -= 0.2;
    if (scale < 1) scale = 1;
    overtripper.style.transform = `scale(${scale})`;
    overtripper.style.transition = "transform 0.3s ease";
  }
});

const boaQRcode = document.querySelectorAll(".boa-QRcode");

boaQRcode.forEach((item) => {
  item.addEventListener("click", function () {
    boaQRcode.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
*/

const $overtripper = $("#overlaydiver");
let flipY = false;
let flipX = false;
let angle = 0;
let scale = 1;

$("#overdoimoiupdowwn").on("click", function () {
  flipY = !flipY;
  $overtripper.css({
    transform: flipY ? "scaleY(-1)" : "scaleY(1)",
    transition: "transform 0.3s ease",
  });
});

$("#overdoileftright").on("click", function () {
  flipX = !flipX;
  $overtripper.css({
    transform: flipX ? "scaleX(-1)" : "scaleX(1)",
    transition: "transform 0.3s ease",
  });
});

$("#overdoixoayright").on("click", function () {
  angle += 90;
  $overtripper.css({
    transform: `rotate(${angle}deg)`,
    transition: "transform 0.3s ease",
  });
});

$("#overdoixoaylefft").on("click", function () {
  angle -= 90;
  $overtripper.css({
    transform: `rotate(${angle}deg)`,
    transition: "transform 0.3s ease",
  });
});

$("#overdoimoitanng").on("click", function () {
  scale += 0.2;
  $overtripper.css({
    transform: `scale(${scale})`,
    transition: "transform 0.3s ease",
  });
});

$("#overdoimoigiam").on("click", function () {
  if (scale > 1) {
    scale -= 0.2;
    if (scale < 1) scale = 1;
    $overtripper.css({
      transform: `scale(${scale})`,
      transition: "transform 0.3s ease",
    });
  }
});

$(".boa-QRcode").on("click", function () {
  $(".boa-QRcode").removeClass("active");
  $(this).addClass("active");
});
