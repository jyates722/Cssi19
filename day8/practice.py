def characterCount():
    word= raw_input("Enter a string")
    d={}
    for i in word:
        if d.has_key(i):
            d[i] = d [i] + 1
        else:
            d[i] = 1 
    for  x,y in d.item():
        print x,":", y        