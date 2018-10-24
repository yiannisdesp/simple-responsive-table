### A simple jQuery plugin which assists you to create a clean responsive table.
#### :beginner: May become handy especially when the table is generated dynamically like a content editor.   
---
*Credits for the styling goes to [Matt Smith](https://codepen.io/AllThingsSmitty/pen/MyqmdM) pen*

##### :white_check_mark: Wrap your content which contains the table(s):
```
<div class="has-responsive-table">
	<table>
		...
	</table>
</div>
```

##### :seedling: Use the plugin to automatically adjust your table:
`$('.has-responsive-table').simpleResponsiveTable();`

##### :hash: Available Options:
```
{
	table: 'table', // the table element, can be a css selector or an element
	stripStyleAttribute: true, // helpful when the table comes from an editor like tinymce
	labelAttribute: 'data-label', // the attribute used in css styles on small devices
	fillBlankCells: '' // set this content to blank cells in order to maintain paddings
}
```

##### :sweat_drops: Finally inlude the following mixin to your styles:
```
// include the .scss file into your main scss and use it as follows with a breakpoint parameter (optional)
@include responsive-table(768px) 
```