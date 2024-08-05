function getCSSVariable(variableName)
{
  let root = document.documentElement;
  let computedStyle = getComputedStyle(root);
  return computedStyle.getPropertyValue(variableName);
}

function setCSSVariables(name, value)
{
  document.documentElement.style.setProperty(name, value);
}

function setVariables (element, options = {})
{
  
  let defaults = {
    "name": "",
    "listener": "input",
    "val": "px"
  }

  const settings = { ...defaults, ...options };

  // console.log(settings);
  element.addEventListener(settings.listener, function()
  {
    setCSSVariables(settings.name, String(this.value + settings.val).trim());
  });
}

const getSettings = document.querySelectorAll('#content input, #content select');

getSettings.forEach(function(elem)
{
  setVariables(elem,
  {
    "name": "--"+elem.name,
    "val": elem.getAttribute('val'),
    "listener": elem.getAttribute('listener')
  });
});


function initializeColorInput(inputElement)
{
  alert();
  console.log(inputElement);
  //inputElement.value = getCSSVariable('xx');
}