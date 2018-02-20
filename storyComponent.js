(function() {
  var storyComponent = {
    template: `
    <div class="storyDiv">
      <p>One fine day, my trusty {{ $ctrl.wordsToDisplay.noun || "________"}} woke up to find a {{ $ctrl.wordsToDisplay.adjective || "________"}} cat.  The cat was {{ $ctrl.wordsToDisplay.verb || "________"}} {{ $ctrl.wordsToDisplay.adverb || "________" }}.  What a weird morning...</p>
      <button type="button" ng-click="$ctrl.reset()">Restart Story</button>
    </div>
    `,
    controller: function(StoryService) {
      var $ctrl = this;
      $ctrl.wordsToDisplay = StoryService.getWords();

      $ctrl.reset = function(){
        $ctrl.wordsToDisplay = {};
        console.log("reset");
      }
    }

  };

  angular
    .module("storyApp")
    .component("storyComponent", storyComponent);
})();
