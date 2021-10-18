'use strict'



function renderProjects() {
    var projects = getProjects()

    var strHtml = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderPortfolioModal(${project.id})">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio2/0${project.id}-full.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${project.name}</h4>
                        <p class="text-muted">${project.title}</p>
                    </div>
                </div>`
    }).join('')

    $('.portfolio-items-section').html(strHtml)
    console.log($('.portfolio-items-section'));

}


function renderPortfolioModal(projId) {
    var currProject = getProjById(projId)
    console.log(projId);
    $('.portfolio-modal .proj-name').text(currProject.name)
    $('.portfolio-modal .item-intro').text(currProject.title)
    $('.portfolio-modal img').attr("src", `img/portfolio2/0${projId}-full.jpg`)
    $('.portfolio-modal .proj-desc').text(currProject.desc)
    $('.portfolio-modal .li-date').text(currProject.publishedAt)
    $('.portfolio-modal .li-lables').text(currProject.lables)
    $('.portfolio-modal .proj-url').attr("href", currProject.url)


}

$('.contact-me-footer').click(openCanvas)


$('.btn-add-form').click(function () {
    var subjectForm = $('#subject').val()
    console.log(subjectForm);
    var bodyForm = $('#messege').val()
    console.log(bodyForm);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=noanissim@gmail.com&su=${subjectForm}&body=${bodyForm}`)
})