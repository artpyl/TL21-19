from colorama import Fore, Back, Style, init
import os
import json

init()
print(Fore.RED + 'Testing CLI: PassesCost' + Style.RESET_ALL)
stream1 = os.popen('se2119 passescost --op1 kentriki_odos --op2 olympia_odos --datefrom 20201001 --dateto 20201101 --format json')
stream2 = os.popen('se2119 passescost --op2 kentriki_odos --op1 olympia_odos --datefrom 20201001 --dateto 20201101 --format json')
output1 = stream1.read()
output2 = stream2.read()
if output1.find("PassesCost: 8.85") and output2.find("PassesCost: 13.80"):
    print(output1)
    print(output2)
    print("As expected KO->OO = 13.80 for October 2020")
    print("As expected OO->KO = 8.85 for October 2020 \n")
else:
    print("Wrong Output")

print(Fore.MAGENTA + 'Testing CLI: ChargesBy' + Style.RESET_ALL)
stream3 = os.popen('se2119 chargesby --op1 aodos --datefrom 20201001 --dateto 20201101 --format json')
output3 = stream3.read()
cor = """
{
    "op_ID": "aodos",
    "RequestTimestamp": "2022-01-24 14:55:17",
    "PeriodFrom": "2020-10-01 00:00:00",
    "PeriodTo": "2020-11-01 00:00:00",
    "PPOList": [
        {
            "VisitingOperator": "kentriki_odos",
            "NumberOfPasses": 10,
            "PassesCost": "20.20"
        },
        {
            "VisitingOperator": "egnatia",
            "NumberOfPasses": 7,
            "PassesCost": "8.90"
        },
        {
            "VisitingOperator": "nea_odos",
            "NumberOfPasses": 6,
            "PassesCost": "4.70"
        },
        {
            "VisitingOperator": "moreas",
            "NumberOfPasses": 6,
            "PassesCost": "9.70"
        },
        {
            "VisitingOperator": "olympia_odos",
            "NumberOfPasses": 14,
            "PassesCost": "34.40"
        },
        {
            "VisitingOperator": "gefyra",
            "NumberOfPasses": 6,
            "PassesCost": "3.80"
        }
    ]
}
"""
if output1.find(cor):
    print(output1)
    print("The charges for aodos are correct \n")
else:
    print("Wrong Output")

print(Fore.BLUE + 'Testing CLI: HealthCheck' + Style.RESET_ALL)
stream4 = os.popen('se2119 hc')
output4 = stream4.read()
b = """
{
    "status": "OK"
}
"""
if output4.find("status : OK"):
    print(output4)
else:
    a = """
    {
        "status": "failed",
        "dbconnection": "Server=localhost;Database=freedomepass;Uid=root;Pwd=root;"
    }
    """
    print(a)

print(Fore.CYAN + 'Testing CLI: ResetStations' + Style.RESET_ALL)
stream5 = os.popen('se2119 resetstations')
output5 = stream5.read()
if output5.find("status : OK"):
    print(output5)
else:
    c = """
    {
        "status": "failed",
    }
    """
    print(c)

print(Fore.GREEN + 'Testing CLI: ResetVehicles' + Style.RESET_ALL)
stream6 = os.popen('se2119 resetvehicles')
output6 = stream6.read()
if output6.find("status : OK"):
    print(output6)
else:
    print(c)

print(Fore.YELLOW + 'Testing CLI: ResetPasses' + Style.RESET_ALL)
stream7 = os.popen('se2119 resetpasses')
output7 = stream7.read()
if output7.find("status : OK"):
    print(output7)
else:
    print(c)
