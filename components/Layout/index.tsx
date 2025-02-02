import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
import Header from '../Header'
import SiteHeader from './components/SiteHeader'

type Props = {}

const SiteLayout = ({children}: LayoutProps) => {
  return (
    <div className="">
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default SiteLayout