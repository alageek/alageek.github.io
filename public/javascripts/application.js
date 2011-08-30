$(function() {
    var team = $('ul.team');
    var projects = $('ul.projects');

    $.ajax({
        url: 'https://api.github.com/orgs/alageek/members',
        dataType: 'jsonp',
        success: function(response) {
            var directive = {
                'li': {
                    'member<-data': {
                        'a@href+': 'member.login',
                        'img@src': 'member.avatar_url',
                        'span.login': 'member.login'
                    }
                }
            };
            team.render(response, directive);
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
                        'span.name': 'project.name'
                    }
                }
            };
            projects.render(response, directive);
        }
    });
});