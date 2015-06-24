<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AppBundle:default:index.html.twig', array(
            'page_title' => 'Welcome',
            'page_subtitle' => ''
        ));
    }
}
