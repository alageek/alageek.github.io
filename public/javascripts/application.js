$(function() {
    var team = $('div.team ul');
    var projects = $('ul.projects');

    $.ajax({
        url: 'https://api.github.com/orgs/alageek/members',
        dataType: 'jsonp',
        success: function(response) {
            var userObject;
            $.each(response.data, function(key, value) {
                $.ajax({
                    url: value.url,
                    dataType: 'jsonp',
                    success: function(response) {
                        var user = response.data;
                        userObject = 
                              '<li>'
                            +     '<a href="https://github.com/' + user.login + '" target="_blank">'
                            +         '<img class="avatar" src="' + user.avatar_url + '" />'
                            +         '<span class="name">' + user.name + '</span>'
                            +         '<span class="login">' + user.login + '</span>'
                            +     '</a>'
                            + '</li>';
                        team.append(userObject);
                    }
                }); 
            });
        }
    });

    $.ajax({
        url: 'https://api.github.com/orgs/alageek/repos',
        dataType: 'jsonp',
        success: function(response) {
            var directive = {
                'li': {
                    'project<-data': {
                        'a@href+': 'project.name',
                        'span.name': 'project.name',
                        'span.description': 'project.description'
                    }
                }
            };
            projects.render(response, directive);
        }
    });
});