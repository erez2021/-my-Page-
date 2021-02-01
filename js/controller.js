'use strict'




function init() {
    renderProjs()
}

function renderProjs() {
    var projs = gProjs
    var strHtml = projs.map(function (proj) {

        return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="${proj.id}" onclick="renderModal(${proj.id})">
            <div class="portfolio-hover">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
            </div>
            </div>
            <img class="img-fluid" src="img/${proj.id}.jpg" >
            </a>
            <div class="portfolio-caption">
            <h4>${proj.title}</h4>
            <p class="text-muted">${proj.category}</p>
            </div>
           </div>`

    })

    console.log('strHtml:', strHtml)
    $('.render-row').html(strHtml.join(''))
}

function renderModal(projId) {
    var proj = getProjById(projId)
    console.log('proj:', proj)
    var strHtml = `<div class="portfolio-modal modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.title}</h2>
                    <p class="item-intro text-muted"><link rel="stylesheet" href=""></p>
                    <img class="img-fluid d-block mx-auto" src="img/${proj.id}.jpg" alt="">
                    <p>This is the first game that I built by myself. You are invited to play!</p>
                    <ul class="list-inline">
                      <li>Date: ${proj.publishedAt}</li>
                      <li>Category: ${proj.category}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    console.log('strHtml:', strHtml)
    $('.modals').html(strHtml.join(''))
}