<?php
namespace ChatbotBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class ChatServerCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('server:create')
            ->setDescription('Creates the chat server')
            ->addArgument(
                'port',
                InputArgument::OPTIONAL,
                'Which port to start the server on?',
                8080 // Default port
            )
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $port = $input->getArgument('port');
        $container = $this -> getContainer();

        $chatbotServerService = $container -> get('chatbot.server');
        $chatbotServerService -> setServerPort($port);

        if ($chatbotServerService) {
            $chatbotServerService -> create();
        }
    }

}