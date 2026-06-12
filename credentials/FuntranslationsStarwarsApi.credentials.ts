import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FuntranslationsStarwarsApi implements ICredentialType {
        name = 'N8nDevFuntranslationsStarwarsApi';

        displayName = 'Funtranslations Starwars API';

        icon: Icon = { light: 'file:../nodes/FuntranslationsStarwars/funtranslations-starwars.png', dark: 'file:../nodes/FuntranslationsStarwars/funtranslations-starwars.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Funtranslations Starwars API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
