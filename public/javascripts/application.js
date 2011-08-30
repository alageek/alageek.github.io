$(function() {
    var team = $('ul.team');
    var projects = $('ul.projects');

    $.getJSON(
        'https://api.github.com/orgs/alageek/members',
        {}, function(response) {
            var data = {'members': response};
            var directive = {
                'li': {
                    'member<-members': {
                        'a@href+': 'member.login',
                        'img@src': 'member.avatar_url',
                        'span.login': 'member.login'
                    }
                }
            };
            team.render(data, directive);
        }
    );

    $.getJSON(
        'https://api.github.com/orgs/alageek/repos',
        {}, function(response) {
            var data = {'projects': response};
            var directive = {
                'li': {
                    'project<-projects': {
                        'a@href+': 'project.name',
                        'span.name': 'project.name'
                    }
                }
            };
            projects.render(data, directive);
        }
    );
});