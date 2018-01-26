def reverse(string)
  str = string.split('');
  reversed_str = '';
  i = str.length - 1
  while i >= 0
    reversed_str += str[i]
    i -= 1
  end
  reversed_str
end


def array_sum(array)
  if array.length == 0
    return 0
  elsif array.length == 1
    return array[0]
  end
  array[array.length-1] + array_sum(array[0..-2])
end
