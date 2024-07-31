export default class Styller
{
  constructor(
    {
      settingsPath = './settings.json',
    } = {}
  )
  {
    const styles = document.createElement('link');
          styles.rel = 'stylesheet';
          styles.href = './styles/styles.css';

    document.head.appendChild(styles);

    const settings = this.loadSettings(settingsPath);

    settings.then((responseSettings) => {
      this.setCSSVariables(responseSettings);
    });
  }


  async loadSettings(path)
  {
    try
    {
      const response = await fetch(path);
      if (!response.ok)
      {
        throw new Error('Network response was not ok');
      }
      const settings = await response.json();
      return settings;
    }
    catch (error)
    {
      console.error(error);
    }
  }


  setCSSVariables(variables)
  {
    // console.log(variables);
    // return;
    for (const [name, value] of Object.entries(variables))
    {
      document.documentElement.style.setProperty('--'+name, value);
    }
  }
}