function Player(data) {
    this.player_id   = ko.observable(data.id);
    this.firstName   = ko.observable(data.firstName);
    this.scores      = ko.observableArray(data.scores);
    this.firstRoll   = ko.observable(data.scores.firstRoll);
    this.secondRoll  = ko.observable(data.scores.secondRoll);
    this.thirdRoll   = ko.observable(data.scores.thirdRoll);
    this.roundPoints = ko.observable(data.scores.roundPoints);
}

function TaskViewModel() {
    // Data
    var self     = this;
    self.players = ko.observableArray([]);
    
    // Load initial state from server, convert it to Task instances, then populate self.tasks
     var url2 = "http://localhost:8081/BowlingUserService/users/1";
     $.getJSON(url2, function(allData) {
        var mappedPlayers = $.map(allData, function(item) {
            return new Player(item);
        });
        self.players(mappedPlayers);
    });

}
ko.applyBindings(new TaskViewModel());