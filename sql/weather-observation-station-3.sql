SELECT DISTINCT CITY FROM STATION WHERE MOD(ID, 2) = 0;

# 
# distinct fungsi agar city tidak duplikat
# fungsi mod(id,2) == 0  sama seperti :  modulus / id % 2 == 0 
# 