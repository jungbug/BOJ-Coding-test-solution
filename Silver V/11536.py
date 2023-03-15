def line_up(name_list):
    answer = "NEITHER"
    incresing_list = sorted(name_list)
    
    if name_list == incresing_list:
        answer = "INCREASING"
    elif name_list == incresing_list[::-1]:
        answer = "DECREASING"
        
    return answer


if __name__ == "__main__":
    name_list = []
    for _ in range(int(input())):
        name = input()
        name_list.append(name)
        
    print(line_up(name_list=name_list))