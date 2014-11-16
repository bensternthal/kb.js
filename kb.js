var KanbaneryClient = function(options) {
  options = options || {};
  this.api_token = options.api_token;
  this.workspace_url = options.workspace_url;
  this.project_id = options.project_id || 0;
}


KanbaneryClient.prototype = {

  test : function() {
    return true;
  }

}

exports.createClient = function(options) {
  return new KanbaneryClient(options);
}

