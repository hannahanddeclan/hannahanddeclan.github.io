const toggleSection = (section) => {
    const id = section + '-options'
    const sectionElement = document.getElementById(id+'-body')
    if (sectionElement.style.display != 'block') {
      sectionElement.style.display = 'block'
      document.getElementById(id+'-expander').innerHTML = 'expand_less'
    } else {
      sectionElement.style.display = 'none'
      document.getElementById(id+'-expander').innerHTML = 'expand_more'
    }
  }