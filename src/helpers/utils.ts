import crypto from 'crypto'
import { decodeURL } from 'hexo-util'

hexo.extend.helper.register('md5', function (string) {
    return crypto.createHash('md5').update(string).digest('hex')
})

hexo.extend.helper.register('decode_url', decodeURL)
