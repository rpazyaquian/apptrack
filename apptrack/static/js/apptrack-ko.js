// Editable Text object:
function EditableText(text, editable) {
    var self = this;
    self.text = ko.observable(text);
    self.editing = ko.observable(editable);
}

// Job app object:
function JobApp(title, description, company, submit_date, link) {
    var self = this;

    self.title = ko.observable(new EditableText(title, false));
    self.description = ko.observable(new EditableText(description, false));
    self.company = ko.observable(new EditableText(company, false));
    self.submit_date = ko.observable(new EditableText(submit_date, false));
    self.link = ko.observable(new EditableText(link, false));

    self.edit = function (model) {
        console.log(model);
        model.editing(true);
    };
}

// Main KO logic:
function AppViewModel() {
    var self = this;

    self.apps = ko.observableArray([new JobApp('Noodle Picker', 'Picks, noodles, and leaves', 'Noodle Pickers, Inc.', '2014-1-25', 'noodlepickers.com'),
    new JobApp('Not A Real Job', 'Not a real job', 'Not A Real Company', '1969-1-1', 'nope.com')]);

    self.addApp = function () {
        self.apps.push(new JobApp('Job Title', 'Description', 'Company', 'Submission Date', 'Link'));
    };

    self.logToConsole = function () {
        console.log(ko.toJSON(self));
    };

    self.saveData = function () {
        $.ajax({
            url: "/echo", 
            data: ko.toJSON(self), 
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            success: function(result) { alert(result); }
        });
    };
}

ko.applyBindings(new AppViewModel());