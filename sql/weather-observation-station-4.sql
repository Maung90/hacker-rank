SELECT count(city) - count(DISTINCT CITY) as hasil FROM STATION;

# 
# distinct fungsi agar city tidak duplikat
# fungsi mod(id,2) == 0  sama seperti :  modulus / id % 2 == 0 
# 