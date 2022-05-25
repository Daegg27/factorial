def factorial(num):
	if num <= 1:
		return 1

	answer = num * factorial(num - 1)
	
	return answer
	
	
	

factorial(10)