# SimpleAccordion v1.0
==================

__Usage__



```html
// Dependencies
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="jquery.simple.accordion.js"></script>
<link rel="stylesheet" href="jquery.simple.accordion.css">

<!-- Accordion -->
<dl class="accordion">
	<dt>Item 1</dt>
	<dd class="active"> <!-- Default to active -->
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
		Sequi voluptatum enim nobis eligendi error consectetur nemo 
		distinctio expedita quis illo ipsam minima id dicta quisquam 
		repudiandae a repellat officia. Minus.
		</p>
	</dd>

	<dt>Item 2</dt>
	<dd>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
		Sequi voluptatum enim nobis eligendi error consectetur nemo 
		distinctio expedita quis illo ipsam minima id dicta quisquam 
		repudiandae a repellat officia. Minus.
		</p>
	</dd>

	<dt>Item 3</dt>
	<dd>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
		Sequi voluptatum enim nobis eligendi error consectetur nemo 
		distinctio expedita quis illo ipsam minima id dicta quisquam 
		repudiandae a repellat officia. Minus.
		</p>
	</dd>
</dl>

<script>
$(function () {
	
	// Apply to element 
	$(".accordion").SimpleAccordion();	

});
</script>
```

Enjoy ;)
