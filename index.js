var projects = ['Hiking', 'Youtube']
var title = {}
title['Hiking'] = "Hiking"
title['Youtube'] = "Youtube Videos"
var description = {}
description['Hiking'] = "My goal is to create a video that would transport viewers to the summit of best mountains."
description['Youtube'] = "Make videos every week and publish them."
var deadline = {}
var goals = {}
goals['Hiking'] = ['Mt. Everest', 'Mt. Humphreys']
goals['Youtube'] = ['Hit 5M subs']
var actions = {}
actions['Mt. Everest'] = ['Apply for permit','Get gear', 'Train hard', 'Finish course']
actions['Mt. Humphreys'] = ['GPS', 'Get gear']
actions['Hit 5M subs'] = ['Purchase new mic and camera', 'Edit the pending videos']

var current_project = projects[0];
var current_goal = goals[current_project][0]

function fill_projects(){
    $("#projects a").remove();
    for(i = 0; i<projects.length;i++){
        $("#projects").append('<a href="#" class="list-group-item list-group-item-action project">'+ projects[i]+'</a>');    
    }
}

function fill_goals(project){
    $("#title").text(title[project]);
    $("#description").text(description[project]);
    $("#project-goals a").remove();
    if(!(project in goals)){
        return;
    }
    for(i = 0; i<goals[project].length;i++){
        $("#project-goals").append('<a href="#" class="list-group-item list-group-item-action goal">'+ goals[project][i]+'</a>');    
    }
}

function fill_actions(goal){
    $("#project-actions a").remove();
    if(!(goal in actions)){
        return;
    }
    for(i =0;i<actions[goal].length; i++){
        $("#project-actions").append('<a href="#" class="list-group-item list-group-item-action action">'+actions[goal][i]+'</a>');
    }
    
}

$(document).ready(function () {
    fill_projects();
    $(document).on('click','.project',function(e) {
        $("#goal").show();
        $("#action").hide();
        current_project = $(this).text();
        fill_goals(current_project);
    });

    $(document).on('click','.goal',function(e) {
        $("#action").show();
        current_goal = $(this).text();
        fill_actions(current_goal);
      });
    
      $(document).on('click','.action',function(e) {
        $(this).toggleClass('stroked');
      });
      
      $(document).on('click','#add-project',function(e) {
        var name = $("#project-name").val()
        projects.push(name);
        title[name] = $("#project-title").val();
        description[name] = $("#project-description").val();
        fill_projects();
        $('#projectModal').modal('toggle');
      });

      $(document).on('click','#add-goal',function(e) {
          var name = $("#goal-name").val();
          if(!(current_project in goals)){
            goals[current_project] = [];
          }
        goals[current_project].push(name);
        $('#goalModal').modal('toggle');
        fill_goals(current_project);
      });

      $(document).on('click','#add-action',function(e) {
        var name = $("#action-name").val();
        if(!(current_goal in actions)){
            actions[current_goal] = [];
          }
      actions[current_goal].push(name);
      $('#actionModal').modal('toggle');
      fill_actions(current_goal);
    });

});