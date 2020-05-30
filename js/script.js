getTxt = function (file_url){
    $.ajax({
        url: file_url,
        success: function (data){
            return data;
        }
    });
}
console.log(getTxt('projects/project_list').split('\n'))