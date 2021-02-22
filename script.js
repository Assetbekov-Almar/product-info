const $productInfo = $('#product-info'),
      $nameInput = $productInfo.find('#name'),
      $quantityInput = $productInfo.find('#quantity'),
      $partNumberInput = $productInfo.find('#part-number'),
      $priceInput = $productInfo.find('#price'),
      $currencyInput = $productInfo.find('#currency'),
      $productCheckboxes = $productInfo.find('.product-checkboxes :checkbox'),
      $textareaInfo = $productInfo.find('#textarea-info'),
      nameInputValue = $nameInput.val(),
      quantityInputValue = $quantityInput.val(),
      currencyInputValue = $currencyInput.val(),
      priceInputValue = $priceInput.val(),
      partNumberInputValue = $partNumberInput.val()

$productCheckboxes.on('change', function() {
	let mainInfo = price = partNumber = '', array = []
	$productCheckboxes.filter(':checked').map(function(index,value) {
		if (value.getAttribute('id') === 'main-info-checkbox') {
			if (nameInputValue) mainInfo += nameInputValue
			if (quantityInputValue) mainInfo += ' '+quantityInputValue
			mainInfo.trim()
		}
		if (value.getAttribute('id') === 'price-checkbox') {
			if (priceInputValue) price += priceInputValue
			if (currencyInputValue) price += ' '+currencyInputValue
			mainInfo.trim() 
		}
		if (value.getAttribute('id') === 'part-number-checkbox') {
			if (partNumberInputValue) partNumber += partNumberInputValue
		}
	})
	array = [mainInfo, price, partNumber].filter(value => value ? true : false)

	$textareaInfo.val(array.join(', '))
})