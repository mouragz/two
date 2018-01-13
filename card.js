$( document ).ready(function() {
    function reset($elem) {
        $elem.before($elem.clone(true));
        var $newElem = $elem.prev();
        $elem.remove();
        return $newElem;
    } 
    $("#flip-card").click(function () {
      var $this =  $('#imgCard');
       $this.removeClass("animated flipInY");
       $this = reset($this);
       $this.addClass("animated flipInY");
    });
});