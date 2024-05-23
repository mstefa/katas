word_to_anagram = "documenting"

def remove_trailing_whitespace(text):
    return text.rstrip()

with open("wordlist.txt", "r") as file:
    word_list_lines = [remove_trailing_whitespace(line) for line in file]

word_list = []
for line in word_list_lines:
    word_list.extend(line.split())

print(sorted(word_to_anagram))

for first_word in word_list:
    for second_word in word_list:
        if sorted(word_to_anagram) == sorted(first_word + second_word):
            print( word_to_anagram, "=", first_word, "+", second_word)
