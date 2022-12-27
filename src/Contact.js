import React from 'react'
import {Button, Card} from 'flowbite-react';

function Contact () {
  return (
    <Card >
      {/* <div className="flex justify-center items-center"> */}
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Based in Newcastle-under-Lyme, Staffordshire, United Kingdom.
    </p>
    <Button.Group className="flex justify-center">
  <Button as="a" href="mailto:hello@maciej.app" color="gray" target="_blank" rel="noopener noreferrer">
    Email
  </Button>
  <Button as="a" href="https://www.linkedin.com/in/maciejdmytrow/" color="gray" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </Button>
  <Button as="a" href="https://github.com/MaciejApp" color="gray" target="_blank" rel="noopener noreferrer">
    GitHub
  </Button>
</Button.Group>
{/* </div> */}
</Card>
  )
}

export default Contact;