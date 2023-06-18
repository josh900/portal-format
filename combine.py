import os

# define the name of the script file and the output file
script_file = os.path.basename(__file__)
output_file = 'combined.txt'

# open the output file in write mode
with open(output_file, 'w') as outfile:
    # iterate over all files in the current directory
    for filename in os.listdir('.'):
        # skip the script file and the output file
        if filename != script_file and filename != output_file:
            # skip directories
            if os.path.isdir(filename):
                continue
            # add a section to the output file for this file
            outfile.write(f'{filename}:\n')
            outfile.write('```\n')
            with open(filename, 'r') as infile:
                outfile.write(infile.read())
            outfile.write('\n```\n\n')
    # add "Hello World" to the last line
    outfile.write('Above is my chrome extension.\n')
