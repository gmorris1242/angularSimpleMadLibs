(function() {
  function StoryService() {
    var savedWordsObj = {};
    return {
      getWords: getWords,
      setWords: setWords

    }

    function getWords() {
      return savedWordsObj;

    }

    function setWords(wordsObj) {
      savedWordsObj = wordsObj;
      console.log(savedWordsObj);
    }
  }

  angular
    .module("storyApp")
    .factory("StoryService", StoryService);
})();
