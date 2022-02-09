function call(cate) {
    var subcate =""
    if (cate!=='all') {
        subcate = `&category=${cate}`
    }
    $.ajax({
        type:'GET',
        url:`https://lee0209.herokuapp.com/https://newsapi.org/v2/top-headlines?country=kr&apiKey=b15c9a51f2214f74999c4504348aea4b${subcate}`,
        dataType:'json',
        success:function(getdata){
            console.log(getdata)
            usedata(getdata)
        },
        error:function(xhr){
            console.log(xhr.status + '/' + xhr.errorText )
        }
    })
}
call('all')


function usedata(data) {
    $('#content .article').remove()
    var elem = `<ul class="article">`
    for (let i in data.articles) {
        elem += `<li>`
        elem += `<h2>${data.articles[i].title}</h2>`
        elem += `<img src="${data.articles[i].urlToImage}" alt="">`
        elem += `<p>${data.articles[i].description}</p>`
        elem += `<div>${data.articles[i].author}</div>`
        elem += `</li>`
    }
    elem += `</ul>`
    $('#content').append(elem)
}

$('.tabTit a').on('click', function(){
    var category = $(this).attr('href')
    call(category)
    return false
})