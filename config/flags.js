exports.flags = {
    wrong: {message: 'You are using the challenge correctly, but thats not the right answer.',},
        challenge1: {
        call: {
            name: 'Challenge 1',
            description: 'Decrypt this rotten message',
            ciphertext: 'guvegrra vf na hayhpxl ahzore',
        },
        response:{
            message: 'Congratulations!',
            plaintext: 'thirteen is an unlucky number',
            flag: 'flag{rott3n_unlucky}'
        }
    },
    challenge2: {
        call: {
            name: 'Challenge 2',
            description: 'Another hidden message to decrypt',
            ciphertext: 'vxtltk vbiaxk ghm max ltetw wkxllbgz',
        },
        response:{
            message: 'Congratulations!',
            plaintext: 'ceasar cipher not the salad dressing',
            flag: 'flag{im_the_salad_master}'
        }
    },
    challenge3: {
        call: {
            name: 'Challenge 3',
            description: 'This wont be as easy as the others, things have been substituted around this time',
            ciphertext: 'Iy ksxa m ksyeohg, xasyeohg yhxx wohmxh fhxbsh yh xhpwmj.',
        },
        response:{
            message: 'Congratulations!',
            plaintext: 'Im just a jumbled stumbled mess please rescue me senpai.',
            flag: 'flag{no_w33bs_please}',
            key: 'MEBGHDICJKTOYPLWZFXASVURQN'
        }
    },
    challenge4: {
        call: {
            name: 'Challenge 4',
            description: 'Lets step it up a notch now, were on rails now',
            ciphertext: 't yeedv cre satpfntn eierdi aikfer e cf dctlootbdePcecea feoueoayfmsonsin o sr eu',
        },
        response:{
            message: 'Congratulations!',
            plaintext: 'Picket fences are a type of fence often used decoratively for domestic boundaries',
            flag: 'flag{not_those_kind_of_rails}',
            key: '5'
        }
    },
   
    challenge5: {
        call: {
            name: 'Challenge 5',
            description: 'You get the idea, decrypt this transposition',
            ciphertext: 'w tesitel ksrInh lj timum kiateatla k tal ',
        },
        response:{
            message: 'Congratulations!',
            plaintext: 'I just want milk that taste like real milk',
            flag: 'flag{he_needs_some_milk}',
            key: 'FULLCREAM'
        }
    },
    challenge6: {
        call: {
            name: 'Challenge 6',
            description: 'letters might be too easy for you, lets remove them',
            ciphertext: '.... . .-.. .--.     -- .     .--. .-.. . .- ... .     --.. .- -.-.     .... .- ...     - .-. .- .--. .--. . -..     -- .     .. -.     .... .. ...     ..- -. -.. . .-. --. .-. --- ..- -. -..     -... .- ... . -- . -. -',
        },
        response:{
            message: 'Congratulations!',
            plaintext: 'help me please zac has trapped me in his underground basement',
            flag: 'flag{MOAR_morse_code}',
        }
    },
    challenge7: {
        call: {
            name: 'Challenge 7',
            description: 'If we have a public RSA key of (e=3,n=55), encrypt the message n=6',
            ciphertext: '',
        },
        response:{
            message: 'Congratulations!',
            plaintext: '51',
            flag: 'flag{mod_maths_is_fun}',
        }
    },
    challenge8: {
        call: {
            name: 'Challenge 8',
            description: 'Ive done something very special to my password',
            ciphertext: 'cec6914c7d961496bb373513195bd255',
        },
        response:{
            message: 'Congratulations!',
            plaintext: 'MyVerySecurePassword1337',
            flag: 'flag{#hash_tag}',
        }
    },
}
