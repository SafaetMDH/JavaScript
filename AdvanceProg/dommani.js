/**
 * Task 4: Write a click-handling function
Write a new function declaration, named handleClicks. It should not accept any parameters.

Inside of it, code a switch statement, and pass a single parameter to it, h1.innerText.

The body of the switch statement should have a total of 4 cases (the fourth being the default case).

The first case should start with case arr[0]:. It should set the h1.innerText to arr[1]. In other words, it should assign the value of arr[1] to the h1.innerText property. The next line should have only the break keyword.

The second case should start with case arr[1]:. It should set the h1.innerText to arr[2]. In other words, it should assign the value of arr[2] to the h1.innerText property. The next line should have only the break keyword.

The third case should start with case arr[2]:. It should set the h1.innerText to arr[3]. In other words, it should assign the value of arr[3] to the h1.innerText property. The next line should have only the break keyword.

The default case should set the value of the h1.innerText property to arr[0].
 */

/**
 * 
 */

function handleClicks() {
        switch(h1.innerText) {
            case arr[0]:
                h1.innerText = arr[1]
                break
            case arr[1]:
                h1.innerText = arr[2]
                break
            case arr[2]:
                h1.innerText = arr[3]
                break
            default:
                h1.innerText = arr[0]
        }
    }