### A simple jQuery plugin which helps you to create a clean responsive table especially when the table comes from a content editor.  
---
  
#### Example:
```
<div class="has-responsive-table">
	<table>
		<thead>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>
<script>
	// with default options:
	$('.has-responsive-table').simpleResponsiveTable({
		table: 'table', // the table element, can be a css selector or an element
        stripStyleAttribute: true, // helpful when the table comes from an editor like tinymce
        labelAttribute: 'data-label' // the attribute used in css styles on small devices
	});
</script>
```

#### Styling:
```
// include the .scss file into your main scss and use it as follows with a breakpoint parameter (optional)
@include responsive-table(768px) 
```