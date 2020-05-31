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

function printFiles(tag_id) {
  let files = loadFile('https://raw.githubusercontent.com/ChrisYeomans/pers-site/master/projects/projects_list').split('\n').filter(Boolean);
  console.log(`[FILES] ${files}`)
  let projects = files.map(e => loadFile(`https://raw.githubusercontent.com/ChrisYeomans/pers-site/master/projects/${e}.md`));
  console.log(`[PROJECTS] ${projects}`)


  let tag = $(`#${tag_id}`);
  projects.forEach(e => tag.innerHTML += e); 
  
}