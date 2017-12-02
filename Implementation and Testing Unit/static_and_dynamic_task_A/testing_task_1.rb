# ### Testing task 1 code:
#
# # Carry out static testing on the code below.
# # Read through the code.
# # Comment any errors you can see without correcting them.
#
#
# def func1 val
#   if val = 1 # should be ==
#   return true
#   else
#   return false
#   end
# end
#
# dif max a b # should be def, not dif : should be a , between parameters
#   if a > b
#       return a
#   else
#   b
#   end
# end
# end # one too many ends
#
# def looper
#   for i in 1..10
#   puts i
#   end
# end
#
# failures = 0
#
# if looper == 10
#   puts "looper passed"
# else
#   puts "looper failed"
#   failures = failures + 1
# end
#
#
# if func1(3) == false
#   puts "func1(3) passed"
# else
#   puts "func1(3) failed"
#   failures = failures + 1
# end
#
#
# if max(100,1) == 100
#   puts "max(100,1) passed"
# else
#   puts "func1(3) failed"
#   failrues = failures + 1
# end
#
#
# if failures
#   puts "Test Failed"
# else
#   puts "Test Passed"
# end

### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  if val = 1 #should be ==
  return true #needs an indent
  else
  return false#needs an indent
  end
end

dif max a b #should be def not dif and needs comma between a and b
  if a > b
      return a #indented too far.
  else
  b #needs an indent
  end
end
end  #one too many 'end'

def looper
  for i in 1..10
  puts i #needs an indent
  end
  # needs to return the final result of the loop to fulfil the test.
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
 # there is an 'end' missing from here.

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" #this should be referencing the function max(100,1)
  failrues = failures + 1 #typo - should say failures not failrues
end


if failures # requires a condition.
  puts "Test Failed"
else
  puts "Test Passed"
end
