(function() {
  var formComponent = {
    template: `
    <form class="" ng-submit="$ctrl.seeStory(words)">
          <input type="text" placeholder="noun" ng-model="words.noun">
          <input type="text" placeholder="adjective" ng-model="words.adjective">
          <input type="text" placeholder="adverb" ng-model="words.verb">
          <input type="text" placeholder="adverb" ng-model="words.adverb">
          <button type="submit" name="button">Read Story</button>
    </form>
    `,
    controller: function(StoryService) {
      var $ctrl = this;
      $ctrl.seeStory = function(words) {
        StoryService.setWords(words);
        $ctrl.words = {};
      };
    }
  };

  angular
    .module("storyApp")
    .component("formComponent", formComponent);
})();
