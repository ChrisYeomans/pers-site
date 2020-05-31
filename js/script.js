function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }

function getFiles() {
  let files = loadFile('https://raw.githubusercontent.com/ChrisYeomans/pers-site/master/projects/projects_list').split('\n').filter(Boolean);
  console.log(`[FILES] ${files}`);
  let projects = files.map(e => loadFile(`https://raw.githubusercontent.com/ChrisYeomans/pers-site/master/projects/${e}.md`));
  console.log(`[PROJECTS] ${projects}`);
  return projects;  
}