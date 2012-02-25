$(function() {
	$('textarea').on('keyup', function(e) {
		$('#viewer').html(
			markdown.toHTML($(this).val())
		);
	});

	$('button').on('click', function() {
		$('textarea').html(
			$('#dummy-data').html()
		);
		$('textarea').trigger('keyup');
	});
});