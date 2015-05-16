define(['knockout','text!./scores.html', 'jquery', 'lodash'], function (ko,template, $, _) {

    function ScoresViewModel () {

        var Player = function (data) {
            var self = this;
            self.player_id   = ko.observable(data.id);
            self.firstName   = ko.observable(data.firstName);
            self.scores      = ko.observableArray(data.scores);
            self.total       = ko.computed({
                read: function () {
                    var total = 0;
                    ko.utils.arrayForEach(this.scores(), function(score) {
                        total += score.roundPoints;
                    });
                    return total;
                },
                owner: self
            });
        }

        // Data
        var self     = this;
        self.players = ko.observableArray([]);
        
        var url = "http://localhost:8081/BowlingUserService/users/game/1";

        $.getJSON(url, function(allData) {
            var mappedPlayers = $.map(allData, function(item) {
                return new Player(item);
            });

            self.players(mappedPlayers);
        });
       
    };

    return { viewModel: ScoresViewModel, template: template };

});

