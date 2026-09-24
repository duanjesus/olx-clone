FROM php:7.4-cli

RUN rm -f /etc/apt/sources.list.d/* \
    && echo 'deb http://archive.debian.org/debian bullseye main' > /etc/apt/sources.list \
    && apt-get -o Acquire::Check-Valid-Until=false update && apt-get install -y \
    git unzip libzip-dev libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip xml opcache \
    && rm -rf /var/lib/apt/lists/*

# `php artisan serve` runs on the cli-server SAPI, which opcache treats as
# "CLI" and skips by default (opcache.enable only covers php-fpm/apache).
# Without this every request re-parses the whole vendor/ tree from disk,
# which is what made every single request take 1s+ over the Windows bind
# mount, even trivial routes with no DB query.
RUN { \
    echo 'opcache.enable=1'; \
    echo 'opcache.enable_cli=1'; \
    echo 'opcache.validate_timestamps=1'; \
    echo 'opcache.revalidate_freq=0'; \
    echo 'opcache.memory_consumption=128'; \
    echo 'opcache.max_accelerated_files=20000'; \
    } > /usr/local/etc/php/conf.d/opcache-custom.ini

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
