import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Hamburger = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <div className="md:hidden">
        <HamburgerIcon h={30} w={30} className="hover:text-purple-400 duration-300 transition-all cursor-pointer" 
        onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs" onClose={onClose} onOpen={onOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerBody className="w-full bg-slate-200 h-full">
                <div className="z-20">
                  
                  <Link to={"/profile"} className="link w-full">Profile</Link>
                  <Link to={"/products"} className="link">Products</Link>
                  <Link to={"/skills"} className="link">Skills</Link>
                </div>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </div>
  )
}

export default Hamburger