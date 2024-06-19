$("button").addClass("b-button");
$("h1").addClass("b-title");

$("button").click(() => {
  $("h1").toggleClass("b-title");
})

$("input").keypress((e) => {
  $("h1").text(e.key);
})

$("h1").on("mouseover", () => {
  $("h1").css("color", "red");
});



$("h1").on("mouseleave", () => {
  $("h1").css("color", "purple");
});

// before after prepend append - to add element
// $().before(<p>)
// .remove - to remove element

// .hide / .show

// .toggle / fadOut / fadeIn / fadeToggle / slideUp / slideDown / slideToggle
// .animate (write css rules) - .animate({opacity: 0.5;}) - only accepts numeric values

// never memorize everything - functions exists and roughly what they are called - like a open book exam

// mix knowledge from modules in a project for SOLIDIFY ***