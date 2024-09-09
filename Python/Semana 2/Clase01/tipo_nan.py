from decimal import Decimal
import math

# NaN(Not a Number)
a = float("nan")
print(f"a: {a}")

# Módulo math
a = float("nan")
print(f"es de tipo NaN(not a number)? {math.isnan(a)}")

# Módulo decimal
a = Decimal("NaN")
print(f"es de tipo NaN(not a number)? {math.isnan(a)}")
 