//Functions to change UI elements on certain events being triggered
const uiChange = {
  //Function to toggle the overlay menu on button click
  toggleMenuOverlay: function() {
    //toggles the menu-overlay-inactive which changes the 'visibility' and 'opacity' styles
    if (menuOverlay.classList.contains("menu-overlay-inactive")) {
      menuOverlay.classList.remove("menu-overlay-inactive");
    } else {
      menuOverlay.classList.add("menu-overlay-inactive");
    }
  },
  //Function to change the container height
  toggleContainerHeight: function(pixelsMob, pixelsCom) {
    //Checking if the device is a mobile if it's screen width is less than 1024
    if (window.screen.width < 1024) {
      contentContainer.style.height = "calc(100% - " + pixelsMob + ")";
    } else {
      contentContainer.style.height = "calc(100% - " + pixelsCom + ")";
    }
  },
  //Function to toggle the bottom bar on page change depending on the displayValue argument
  toggleBottomBar: function(displayValue) {
    bottomBar.style.display = displayValue;
    if (displayValue === "none") {
      this.toggleContainerHeight("175px", "85px");
    } else {
      this.toggleContainerHeight("300px", "150px");
    }
  },
  //Function to add hover animations to the specified child element(btnChild) of button div
  btnHoverAnimation: function(btnChild, transformVal, fontSizeVal) {
    //If the given element is a P tag
    if (btnChild.nodeName === "P") {
      //Checking if the device is a mobile by checking it's screen width
      if (window.screen.width <= 1024) {
        btnChild.style.fontSize = "48px";
      } else {
        btnChild.style.transform = transformVal;
        btnChild.style.fontSize = fontSizeVal;
      }
    }
  }
};
